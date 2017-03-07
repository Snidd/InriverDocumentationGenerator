import { ExampleXml } from '../../classes/exampleXml';
import { TestBed, inject } from '@angular/core/testing';

import { InriverModelParserService } from './inriver-model-parser.service';

describe('InriverModelParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InriverModelParserService]
    });
  });

  it('should get all entities', inject([InriverModelParserService], (service: InriverModelParserService) => {
    let example = new ExampleXml();
    expect(service).toBeTruthy();
    let test = service.getEntities(example.get());
    expect(test.length).toBe(23);
  }));

  it('should be able to get the entity', inject([InriverModelParserService], (service: InriverModelParserService) => {
    let example = new ExampleXml();
    expect(service).toBeTruthy();
    let test = service.getEntities(example.get());
    let ent = service.getEntity(test[0]);
    expect(ent.id).toBe("Activity");
    expect(ent.isLinkEntityType).toBeFalsy();
    expect(ent.name.languages["nl"]).toBe("Activiteit");
    expect(ent.fieldTypes.length).toBe(18);
  }));

    it('should be able to get the fieldTypes', inject([InriverModelParserService], (service: InriverModelParserService) => {
    let example = new ExampleXml();
    expect(service).toBeTruthy();
    let test = service.getEntities(example.get());
    let ent = service.getEntity(test[0]);
    expect(ent.fieldTypes.length).toBe(18);

    expect(ent.fieldTypes[0].id).toBe("ActivityBusinessArea");
    expect(ent.fieldTypes[0].dataType).toBe("CVL");
    expect(ent.fieldTypes[0].cvlId).toBe("ActivityBusinessArea");
    expect(ent.fieldTypes[0].name.languages["en"]).toBe("Business Area");

    expect(ent.fieldTypes[2].id).toBe("ActivityEndDate");
    expect(ent.fieldTypes[2].dataType).toBe("DateTime");
    expect(ent.fieldTypes[2].cvlId).toBe("");
    expect(ent.fieldTypes[2].name.languages["en"]).toBe("End Date");
    expect(ent.fieldTypes[2].name.languages["nl"]).toBe("Einddatum");
    expect(ent.fieldTypes[2].name.languages["fr"]).toBe("Date de fin");
    expect(ent.fieldTypes[2].name.languages["sv"]).toBe("Slutdatum");
  }));
});
