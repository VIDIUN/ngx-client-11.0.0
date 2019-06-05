/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DocumentsAddFromFlavorAssetActionArgs() { }
/** @type {?} */
DocumentsAddFromFlavorAssetActionArgs.prototype.sourceFlavorAssetId;
/** @type {?|undefined} */
DocumentsAddFromFlavorAssetActionArgs.prototype.documentEntry;
/**
 * Build request payload for service 'documents' action 'addFromFlavorAsset'.
 *
 * Usage: Copy flavor asset into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export class DocumentsAddFromFlavorAssetAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDocumentEntry', responseConstructor: KalturaDocumentEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'addFromFlavorAsset' },
            sourceFlavorAssetId: { type: 's' },
            documentEntry: { type: 'o', subTypeConstructor: KalturaDocumentEntry, subType: 'KalturaDocumentEntry' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DocumentsAddFromFlavorAssetAction.prototype.sourceFlavorAssetId;
    /** @type {?} */
    DocumentsAddFromFlavorAssetAction.prototype.documentEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzQWRkRnJvbUZsYXZvckFzc2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Eb2N1bWVudHNBZGRGcm9tRmxhdm9yQXNzZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sd0NBQXlDLFNBQVEsY0FBb0M7Ozs7SUFLdkYsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQyxDQUFDO0tBQzdIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNwRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RCxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7U0FDbEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEb2N1bWVudEVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhRG9jdW1lbnRFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50c0FkZEZyb21GbGF2b3JBc3NldEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzb3VyY2VGbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRkb2N1bWVudEVudHJ5PyA6IEthbHR1cmFEb2N1bWVudEVudHJ5O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZG9jdW1lbnRzJyBhY3Rpb24gJ2FkZEZyb21GbGF2b3JBc3NldCcuXG4gKlxuICogVXNhZ2U6IENvcHkgZmxhdm9yIGFzc2V0IGludG8gbmV3IGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURvY3VtZW50RW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50c0FkZEZyb21GbGF2b3JBc3NldEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFEb2N1bWVudEVudHJ5PiB7XG5cbiAgICBzb3VyY2VGbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRkb2N1bWVudEVudHJ5IDogS2FsdHVyYURvY3VtZW50RW50cnk7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRG9jdW1lbnRzQWRkRnJvbUZsYXZvckFzc2V0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRG9jdW1lbnRFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRG9jdW1lbnRFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZG9jdW1lbnRfZG9jdW1lbnRzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUZsYXZvckFzc2V0JyB9LFxuXHRcdFx0XHRzb3VyY2VGbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRvY3VtZW50RW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEb2N1bWVudEVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFEb2N1bWVudEVudHJ5JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=