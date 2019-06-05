/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function DocumentsServeByFlavorParamsIdActionArgs() { }
/** @type {?} */
DocumentsServeByFlavorParamsIdActionArgs.prototype.entryId;
/** @type {?|undefined} */
DocumentsServeByFlavorParamsIdActionArgs.prototype.flavorParamsId;
/** @type {?|undefined} */
DocumentsServeByFlavorParamsIdActionArgs.prototype.forceProxy;
/**
 * Build request payload for service 'documents' action 'serveByFlavorParamsId'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class DocumentsServeByFlavorParamsIdAction extends KalturaFileRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
        if (typeof this.forceProxy === 'undefined')
            this.forceProxy = false;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'serveByFlavorParamsId' },
            entryId: { type: 's' },
            flavorParamsId: { type: 's' },
            forceProxy: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DocumentsServeByFlavorParamsIdAction.prototype.entryId;
    /** @type {?} */
    DocumentsServeByFlavorParamsIdAction.prototype.flavorParamsId;
    /** @type {?} */
    DocumentsServeByFlavorParamsIdAction.prototype.forceProxy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzU2VydmVCeUZsYXZvclBhcmFtc0lkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Eb2N1bWVudHNTZXJ2ZUJ5Rmxhdm9yUGFyYW1zSWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCckYsTUFBTSwyQ0FBNEMsU0FBUSxrQkFBa0I7Ozs7SUFNeEUsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7S0FDdkU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50c1NlcnZlQnlGbGF2b3JQYXJhbXNJZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zSWQ/IDogc3RyaW5nO1xuXHRmb3JjZVByb3h5PyA6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkb2N1bWVudHMnIGFjdGlvbiAnc2VydmVCeUZsYXZvclBhcmFtc0lkJy5cbiAqXG4gKiBVc2FnZTogU2VydmVzIHRoZSBmaWxlIGNvbnRlbnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50c1NlcnZlQnlGbGF2b3JQYXJhbXNJZEFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZCA6IHN0cmluZztcblx0Zm9yY2VQcm94eSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRG9jdW1lbnRzU2VydmVCeUZsYXZvclBhcmFtc0lkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZm9yY2VQcm94eSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZm9yY2VQcm94eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RvY3VtZW50X2RvY3VtZW50cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlQnlGbGF2b3JQYXJhbXNJZCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JjZVByb3h5IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==