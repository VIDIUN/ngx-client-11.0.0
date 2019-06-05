/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetServeOptions } from './KalturaAssetServeOptions';
/**
 * @record
 */
export function KalturaAttachmentServeOptionsArgs() { }
export class KalturaAttachmentServeOptions extends KalturaAssetServeOptions {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttachmentServeOptions' }
        });
        return result;
    }
}
typesMappingStorage['KalturaAttachmentServeOptions'] = KalturaAttachmentServeOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dGFjaG1lbnRTZXJ2ZU9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFnQyxNQUFNLDRCQUE0QixDQUFDOzs7OztBQU9wRyxNQUFNLG9DQUFxQyxTQUFRLHdCQUF3Qjs7OztJQUl2RSxZQUFZLElBQXlDO1FBRWpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN6RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFNlcnZlT3B0aW9ucywgS2FsdHVyYUFzc2V0U2VydmVPcHRpb25zQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0U2VydmVPcHRpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXR0YWNobWVudFNlcnZlT3B0aW9uc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0U2VydmVPcHRpb25zQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zIGV4dGVuZHMgS2FsdHVyYUFzc2V0U2VydmVPcHRpb25zIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXR0YWNobWVudFNlcnZlT3B0aW9uc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXR0YWNobWVudFNlcnZlT3B0aW9ucycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF0dGFjaG1lbnRTZXJ2ZU9wdGlvbnMnXSA9IEthbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zOyJdfQ==