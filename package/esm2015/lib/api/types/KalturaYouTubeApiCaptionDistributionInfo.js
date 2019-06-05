/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYouTubeApiDistributionCaptionAction } from './KalturaYouTubeApiDistributionCaptionAction';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaYouTubeApiCaptionDistributionInfoArgs() { }
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.language;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.label;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.filePath;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.remoteId;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.action;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.version;
/** @type {?|undefined} */
KalturaYouTubeApiCaptionDistributionInfoArgs.prototype.assetId;
export class KalturaYouTubeApiCaptionDistributionInfo extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaYouTubeApiCaptionDistributionInfo' },
            language: { type: 's' },
            label: { type: 's' },
            filePath: { type: 's' },
            remoteId: { type: 's' },
            action: { type: 'en', subTypeConstructor: KalturaYouTubeApiDistributionCaptionAction, subType: 'KalturaYouTubeApiDistributionCaptionAction' },
            version: { type: 's' },
            assetId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.language;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.label;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.filePath;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.remoteId;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.action;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.version;
    /** @type {?} */
    KalturaYouTubeApiCaptionDistributionInfo.prototype.assetId;
}
typesMappingStorage['KalturaYouTubeApiCaptionDistributionInfo'] = KalturaYouTubeApiCaptionDistributionInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFHLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFsRixNQUFNLCtDQUFnRCxTQUFRLGlCQUFpQjs7OztJQVUzRSxZQUFZLElBQW9EO1FBRTVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMENBQTBDLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1lBQ2pKLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQ0FBMEMsQ0FBQyxHQUFHLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFZb3VUdWJlQXBpRGlzdHJpYnV0aW9uQ2FwdGlvbkFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYVlvdVR1YmVBcGlEaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGxhbmd1YWdlPyA6IHN0cmluZztcblx0bGFiZWw/IDogc3RyaW5nO1xuXHRmaWxlUGF0aD8gOiBzdHJpbmc7XG5cdHJlbW90ZUlkPyA6IHN0cmluZztcblx0YWN0aW9uPyA6IEthbHR1cmFZb3VUdWJlQXBpRGlzdHJpYnV0aW9uQ2FwdGlvbkFjdGlvbjtcblx0dmVyc2lvbj8gOiBzdHJpbmc7XG5cdGFzc2V0SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgbGFuZ3VhZ2UgOiBzdHJpbmc7XG5cdGxhYmVsIDogc3RyaW5nO1xuXHRmaWxlUGF0aCA6IHN0cmluZztcblx0cmVtb3RlSWQgOiBzdHJpbmc7XG5cdGFjdGlvbiA6IEthbHR1cmFZb3VUdWJlQXBpRGlzdHJpYnV0aW9uQ2FwdGlvbkFjdGlvbjtcblx0dmVyc2lvbiA6IHN0cmluZztcblx0YXNzZXRJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mb0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWW91VHViZUFwaUNhcHRpb25EaXN0cmlidXRpb25JbmZvJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYWJlbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhWW91VHViZUFwaURpc3RyaWJ1dGlvbkNhcHRpb25BY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVlvdVR1YmVBcGlEaXN0cmlidXRpb25DYXB0aW9uQWN0aW9uJyB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbyddID0gS2FsdHVyYVlvdVR1YmVBcGlDYXB0aW9uRGlzdHJpYnV0aW9uSW5mbzsiXX0=