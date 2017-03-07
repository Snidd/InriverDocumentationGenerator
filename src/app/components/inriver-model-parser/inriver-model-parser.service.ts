  import { ExampleXml } from '../../classes/exampleXml';
import { Injectable } from '@angular/core';
import * as xpath from 'xpath';
import * as xmldom from 'xmldom';

@Injectable()
export class InriverModelParserService {

  constructor() { }

  getEntities(xml:string):any {
    var doc = new xmldom.DOMParser().parseFromString(xml);
    var nodes = xpath.select("/Model/EntityTypes/EntityType", doc);

    return nodes;
  }

  getEntityId(entity:any):string {
    var title = xpath.select("Id/text()", entity).toString();
    return title;
  }
}
