/**
 * Hexagonal Grid System for Cows and Corgis
 * 
 * This module implements the mathematical foundation for hexagonal grids using
 * the axial coordinate system (q, r). This system is ideal for turn-based games
 * because it makes distance calculations and neighbor detection straightforward.
 * 
 * Key concepts:
 * - q axis: points to the right (column)
 * - r axis: points down and to the left (row)
 * - s axis: derived as -q-r (for validation and some calculations)
 */

class HexCoord {
    /**
     * Create a hexagonal coordinate
     * @param {number} q - Column coordinate (points right)
     * @param {number} r - Row coordinate (points down-left)
     */
    constructor(q, r) {
        this.q = q;
        this.r = r;
        this.s = -q - r; // Third coordinate for validation
    }

    /**
     * Convert hex coordinates to pixel coordinates for rendering
     * @param {number} hexSize - Radius of hexagon in pixels
     * @param {number} offsetX - X offset from origin
     * @param {number} offsetY - Y offset from origin
     * @returns {Object} {x, y} pixel coordinates
     */
    toPixel(hexSize, offsetX = 0, offsetY = 0) {
        //Pointy-top hexagon orientation
        const x = hexSize * (3/2 * this.q) + offsetX;
        const y = hexSize * (Math.sqrt(3)/2 * this.q + Math.sqrt(3) * this.r) + offsetY;
        return {x, y};
    }

    /**
     * Calculate distance between two hex coordinates
     * This is the number of steps needed to move from one hex to another
     * @param {HexCoord} other - Target hex coordinate
     * @returns {number} Distance in hex steps
     */
    distanceTo(other) {
        return (Math.abs(this.q - other.q) +
                Math.abs(this.q + this.r - other.q - other.r) +
                Math.abs(this.r - other.r)) / 2;
    }

    /**
     * Get all neighboring hex coordinates (6 directions)
     * @returns {Array<HexCoord>} Array of 6 neighboring coordinates
     */
    getNeighbors() {
        //The 6 directions in axial coordinates
        const directions = [
            [+1, 0],  // East
            [+1, -1], // Northeast  
            [0, -1],  // Northwest
            [-1, 0],  // West
            [-1, +1], // Southwest
            [0, +1]   // Southeast
        ];

        return directions.map(([dq, dr]) => 
            new HexCoord(this.q + dq, this.r + dr)
        );
    }

    /**
     * Get Neighbor in specific direction (0-5)
     * @param {number} direction - Direction index (0 = East, clockwise)
     * @returns {HexCoord} Neighboring coordinate in that direction
     */
    getNeighbor(direction) {
        const directions = [
            [+1, 0], [+1, -1], [0, -1], [-1, 0], [-1, +1], [0, +1]
        ];
        const [dq, dr] = directions[direction % 6];
        return new HexCoord(this.q + dq, this.r + dr);
    }

    /**
     * Get all hexes within a certain distance
     * @param {number} radius - Maximum distance to include
     * @returns {Array<HexCoord>} All hexes within radius (including center)
     */
    getHexesInRange(radius) {
        const results = [];
        for (let q = -radius; q <= radius; q++) {
            for (let r = Math.max(-radius, -q - radius); r <= Math.min(radius, -q + radius); r++) {
                results.push(new HexCoord(this.q + q, this.r + r));
            }
        }
        return results;
    }

    /**
     * Get Hexes at exactly a certain distance (ring)
     * @param {number} radius - Exact distance from center
     * @returns {Array<HexCoord>} Hexes forming a ring at that distance
     */
    getHexRing(radius) {
        if (radius == 0) return [new HexCoord(this.q, this.r)];

        const results = [];
        let hex = new HexCoord(this.q + radius, this.r);

        for (let direction = 0; direction < 6; direction++) {
            for (let step = 0; step < radius; step++) {
                results.push(new HexCoord(hex.q, hex.r));
                hex = hex.getNeighbor(direction);
            }
        }

        return results;
    }

    /**
     * Check if coordinates are equal
     * @param {Hexcoord} other - Coordinate to compare with
     * @returns {boolean} True if coordinates match
     */
    equals(other) {
        return this.q && this.r === other.r;
    }

    /**
     * Validate hex coordinate (q + r + s should equal 0)
     * @returns {boolean} True if coordinate is valid
     */
    isValid() {
        return this.q + this.r + this.s === 0;
    }

    /**
     * Create a copy of this coordinate
     * @returns {HexCoord} New coordinate with same values
     */
    clone() {
        return new HexCoord(this.q, this.r);
    }

    /**
     * Convert to string for debugging and map keys
     * @returns {string} String representation
     */
    toString() {
        return `(${this.q}, ${this.r})`;
    }

    /**
     * Convert to Hash string for use as object keys
     * @returns {string} Hash representation
     */
    toHash() {
        return `${this.q},${this.r}`;
    }
} // end class 
/**
 * Convert Pixel coordinates back to hex coordinates
 * @param {number} x - Pixel x coordinate
 * @param {number} y - Pixel y coordinate
 * @param {number} hexSize - Size of hexagons
 * @param {number} offsetX - X offset that was used in toPixel
 * @param {number} offsetY - Y offset that was used in toPixel
 * @returns {HexCoord} Nearest hex coordinate
 */
function pixelToHex(x, y, hexSize, offsetX = 0, offsetY = 0) {
    //adjust for offset
    const adjustedX = x - offsetX
    const adjustedY = y - offsetY

    //convert to fractional hex coordinates
    const q = (2/3 * adjustedX) / hexSize;
    const r = (-1/3 * adjustedX + Math.sqrt(3)/3 * adjustedY) /hexSize;

    return hexRound(q, r);
}

/**
 * Round fractional hex coordinates to nearest valid hex
 * @param {number} q - Fractional q coordinate
 * @param {number} r - Fractional r coordinate
 * @returns {HexCoord} Rounded hex coordinate
 */
function hexRound(q, r) {
    const s = -q - r;
    
    let roundedQ = Math.round(q);
    let roundedR = Math.round(r);
    let roundedS = Math.round(s);
    
    const qDiff = Math.abs(roundedQ - q);
    const rDiff = Math.abs(roundedR - r);
    const sDiff = Math.abs(roundedS - s);
    
    // Reset the coordinate with the largest rounding error
    if (qDiff > rDiff && qDiff > sDiff) {
        roundedQ = -roundedR - roundedS;
    } else if (rDiff > sDiff) {
        roundedR = -roundedQ - roundedS;
    }
    
    return new HexCoord(roundedQ, roundedR);
}


/**
 * Generate a hexagonal board layout with specified radius
 * @param {number} radius - Number of layers out from center (0 = just center hex)
 * @returns {Array<HexCoord>} All hexes in the hexagonal board
 */
function generateHexBoard(radius) {
    const hexes = [];
    
    for (let q = -radius; q <= radius; q++) {
        const r1 = Math.max(-radius, -q - radius);
        const r2 = Math.min(radius, -q + radius);
        for (let r = r1; r <= r2; r++) {
            hexes.push(new HexCoord(q, r));
        }
    }
    
    return hexes;
}

/**
 * Find the direction from one hex to another
 * @param {HexCoord} from - Starting hex
 * @param {HexCoord} to - Target hex
 * @returns {number|null} Direction index (0-5) or null if not adjacent
 */
function getDirectionTo(from, to) {
    const dq = to.q - from.q;
    const dr = to.r - from.r;
    
    const directions = [
        [+1, 0], [+1, -1], [0, -1], [-1, 0], [-1, +1], [0, +1]
    ];
    
    for (let i = 0; i < directions.length; i++) {
        if (directions[i][0] === dq && directions[i][1] === dr) {
            return i;
        }
    }
    
    return null; // Not adjacent
}

/**
 * Calculate the hex that is in the opposite direction
 * @param {HexCoord} center - Center hex
 * @param {HexCoord} reference - Reference hex to move away from
 * @returns {HexCoord|null} Hex in opposite direction, or null if not adjacent
 */
function getOppositeHex(center, reference) {
    const direction = getDirectionTo(reference, center);
    if (direction === null) return null;
    
    const oppositeDirection = (direction + 3) % 6;
    return center.getNeighbor(oppositeDirection);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HexCoord,
        pixelToHex,
        hexRound,
        generateHexBoard,
        getDirectionTo,
        getOppositeHex
    };
}
