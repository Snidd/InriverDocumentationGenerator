import * as xpath from 'xpath';

export class FieldUtils {
    constructor() {
    }

    getString(xpathQuery:string, parentDom:any):string {
        let value = xpath.select(xpathQuery, parentDom).toString().trim();
        return value;
    }

    getBool(compareValue:string, xpathQuery:string, parentDom:any) {
        return this.getString(xpathQuery, xpathQuery).toLowerCase() === compareValue;
    }
}