/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFacebookCaptionDistributionInfoArgs() { }
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.language;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.label;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.filePath;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.remoteId;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaFacebookCaptionDistributionInfoArgs.prototype.assetId;
export class KalturaFacebookCaptionDistributionInfo extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaFacebookCaptionDistributionInfo' },
            language: { type: 's' },
            label: { type: 's' },
            filePath: { type: 's' },
            remoteId: { type: 's' },
            version: { type: 's' },
            assetId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.language;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.label;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.filePath;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.remoteId;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.version;
    /** @type {?} */
    KalturaFacebookCaptionDistributionInfo.prototype.assetId;
}
typesMappingStorage['KalturaFacebookCaptionDistributionInfo'] = KalturaFacebookCaptionDistributionInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhY2Vib29rQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlsRixNQUFNLDZDQUE4QyxTQUFRLGlCQUFpQjs7OztJQVN6RSxZQUFZLElBQWtEO1FBRTFELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZhY2Vib29rQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm9BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRsYWJlbD8gOiBzdHJpbmc7XG5cdGZpbGVQYXRoPyA6IHN0cmluZztcblx0cmVtb3RlSWQ/IDogc3RyaW5nO1xuXHR2ZXJzaW9uPyA6IHN0cmluZztcblx0YXNzZXRJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgbGFuZ3VhZ2UgOiBzdHJpbmc7XG5cdGxhYmVsIDogc3RyaW5nO1xuXHRmaWxlUGF0aCA6IHN0cmluZztcblx0cmVtb3RlSWQgOiBzdHJpbmc7XG5cdHZlcnNpb24gOiBzdHJpbmc7XG5cdGFzc2V0SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYWJlbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZhY2Vib29rQ2FwdGlvbkRpc3RyaWJ1dGlvbkluZm8nXSA9IEthbHR1cmFGYWNlYm9va0NhcHRpb25EaXN0cmlidXRpb25JbmZvOyJdfQ==