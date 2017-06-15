// @flow

/**
 * Deep comparison of objects
 * 
 * @param {Object} o First object in the comparison function
 * @param {Object} b Second object in the comparison function
 * @param {string} t Size saver, declares variable here so we can re-assign an existing variable
 * @returns {Boolean} True if they're the same
 */
export function compare (o: Object, b: Object, t: string) : Boolean {
    /**
     * For each parameter in the first object
     */
    for (let p in o) {
        /** If they don't share a property */
        if (o.hasOwnProperty(p) !== b.hasOwnProperty(p)) return false;
        
        t = typeof (o[p]);

        /** If it's an object & those objects don't match */
        if ('object' === t && !compare(o[p], b[p])) return false;

        /** If it's a function and the string values don't match */
        if ('function' === t && b[p] == null || o[p].toString() != b[p].toString()) return false;   

        /** If its simply a key:value store */
        if (o[p] != b[p]) return false;
    }
    
    /** When the value is undefined on the second obj */
    for (let p in b) { if (o[p] == null) return false; }

	return true;
};