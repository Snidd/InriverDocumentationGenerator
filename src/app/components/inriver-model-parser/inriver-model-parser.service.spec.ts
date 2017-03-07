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

  it('should be able to get the entity Id', inject([InriverModelParserService], (service: InriverModelParserService) => {
    let example = new ExampleXml();
    expect(service).toBeTruthy();
    let test = service.getEntities(example.get());
    let id = service.getEntityId(test[0]);
    expect(id).toBe("Activity");
  }));
});
