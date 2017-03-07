import { FieldUtils } from './fieldUtils';
import { LocaleString } from './localeString';
import * as xpath from 'xpath';

export class FieldType {
    id:string;
    dataType:string;
    cvlId:string;
    name:LocaleString;
    constructor(entityDom:any) {
        const fieldUtils = new FieldUtils();
        this.id = fieldUtils.getString("Id/text()", entityDom);
        this.dataType = fieldUtils.getString("DataType/text()", entityDom);
        this.cvlId = fieldUtils.getString("CVLId/text()", entityDom);
        this.name = new LocaleString("Name", entityDom);
    }
}