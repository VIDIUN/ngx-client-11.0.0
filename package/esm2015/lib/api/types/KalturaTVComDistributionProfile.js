/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaTVComDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedTitle;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedLink;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedDescription;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedLanguage;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedCopyright;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageTitle;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageUrl;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageLink;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageWidth;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageHeight;
export class KalturaTVComDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaTVComDistributionProfile' },
            metadataProfileId: { type: 'n' },
            feedUrl: { type: 's', readOnly: true },
            feedTitle: { type: 's' },
            feedLink: { type: 's' },
            feedDescription: { type: 's' },
            feedLanguage: { type: 's' },
            feedCopyright: { type: 's' },
            feedImageTitle: { type: 's' },
            feedImageUrl: { type: 's' },
            feedImageLink: { type: 's' },
            feedImageWidth: { type: 'n' },
            feedImageHeight: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.metadataProfileId;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedTitle;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedLink;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedDescription;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedLanguage;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedCopyright;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageTitle;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageUrl;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageLink;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageWidth;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageHeight;
}
typesMappingStorage['KalturaTVComDistributionProfile'] = KalturaTVComDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRWQ29tRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRWQ29tRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI5SSxNQUFNLHNDQUF1QyxTQUFRLHNDQUFzQzs7OztJQWV2RixZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVFZDb21EaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0ZmVlZFRpdGxlPyA6IHN0cmluZztcblx0ZmVlZExpbms/IDogc3RyaW5nO1xuXHRmZWVkRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRmZWVkTGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRmZWVkQ29weXJpZ2h0PyA6IHN0cmluZztcblx0ZmVlZEltYWdlVGl0bGU/IDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VVcmw/IDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VMaW5rPyA6IHN0cmluZztcblx0ZmVlZEltYWdlV2lkdGg/IDogbnVtYmVyO1xuXHRmZWVkSW1hZ2VIZWlnaHQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVFZDb21EaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGZlZWRVcmwgOiBzdHJpbmc7XG5cdGZlZWRUaXRsZSA6IHN0cmluZztcblx0ZmVlZExpbmsgOiBzdHJpbmc7XG5cdGZlZWREZXNjcmlwdGlvbiA6IHN0cmluZztcblx0ZmVlZExhbmd1YWdlIDogc3RyaW5nO1xuXHRmZWVkQ29weXJpZ2h0IDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VUaXRsZSA6IHN0cmluZztcblx0ZmVlZEltYWdlVXJsIDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VMaW5rIDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VXaWR0aCA6IG51bWJlcjtcblx0ZmVlZEltYWdlSGVpZ2h0IDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVFZDb21EaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUVkNvbURpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZlZWRVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmZWVkVGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZExpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZERlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRMYW5ndWFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkQ29weXJpZ2h0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRJbWFnZVRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRJbWFnZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkSW1hZ2VMaW5rIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRJbWFnZVdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZlZWRJbWFnZUhlaWdodCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVFZDb21EaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhVFZDb21EaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==