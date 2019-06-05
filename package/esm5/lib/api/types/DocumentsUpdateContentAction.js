/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DocumentsUpdateContentActionArgs() { }
/** @type {?} */
DocumentsUpdateContentActionArgs.prototype.entryId;
/** @type {?} */
DocumentsUpdateContentActionArgs.prototype.resource;
/** @type {?|undefined} */
DocumentsUpdateContentActionArgs.prototype.conversionProfileId;
/**
 * Build request payload for service 'documents' action 'updateContent'.
 *
 * Usage: Replace content associated with the given document entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'documents' action 'updateContent'.
 *
 * Usage: Replace content associated with the given document entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
DocumentsUpdateContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsUpdateContentAction, _super);
    function DocumentsUpdateContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDocumentEntry', responseConstructor: KalturaDocumentEntry }) || this;
    }
    /**
     * @return {?}
     */
    DocumentsUpdateContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'updateContent' },
            entryId: { type: 's' },
            resource: { type: 'o', subTypeConstructor: KalturaResource, subType: 'KalturaResource' },
            conversionProfileId: { type: 'n' }
        });
        return result;
    };
    return DocumentsUpdateContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'documents' action 'updateContent'.
 *
 * Usage: Replace content associated with the given document entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export { DocumentsUpdateContentAction };
if (false) {
    /** @type {?} */
    DocumentsUpdateContentAction.prototype.entryId;
    /** @type {?} */
    DocumentsUpdateContentAction.prototype.resource;
    /** @type {?} */
    DocumentsUpdateContentAction.prototype.conversionProfileId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzVXBkYXRlQ29udGVudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRG9jdW1lbnRzVXBkYXRlQ29udGVudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUFrRCx3REFBb0M7SUFNbEYsc0NBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUM1RixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0E5Q0w7RUFxQmtELGNBQWMsRUEwQi9ELENBQUE7Ozs7Ozs7OztBQTFCRCx3Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURvY3VtZW50RW50cnkgfSBmcm9tICcuL0thbHR1cmFEb2N1bWVudEVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhUmVzb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRzVXBkYXRlQ29udGVudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRyZXNvdXJjZSA6IEthbHR1cmFSZXNvdXJjZTtcblx0Y29udmVyc2lvblByb2ZpbGVJZD8gOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkb2N1bWVudHMnIGFjdGlvbiAndXBkYXRlQ29udGVudCcuXG4gKlxuICogVXNhZ2U6IFJlcGxhY2UgY29udGVudCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGRvY3VtZW50IGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURvY3VtZW50RW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50c1VwZGF0ZUNvbnRlbnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRG9jdW1lbnRFbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cmVzb3VyY2UgOiBLYWx0dXJhUmVzb3VyY2U7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRG9jdW1lbnRzVXBkYXRlQ29udGVudEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURvY3VtZW50RW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURvY3VtZW50RW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RvY3VtZW50X2RvY3VtZW50cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZUNvbnRlbnQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVzb3VyY2UnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19