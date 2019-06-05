/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaDoubleClickDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.channelTitle;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.channelLink;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.channelDescription;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.cuePointsProvider;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.itemsPerPage;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.ignoreSchedulingInFeed;
export class KalturaDoubleClickDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaDoubleClickDistributionProfile' },
            channelTitle: { type: 's' },
            channelLink: { type: 's' },
            channelDescription: { type: 's' },
            feedUrl: { type: 's', readOnly: true },
            cuePointsProvider: { type: 's' },
            itemsPerPage: { type: 's' },
            ignoreSchedulingInFeed: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.channelTitle;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.channelLink;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.channelDescription;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.cuePointsProvider;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.itemsPerPage;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.ignoreSchedulingInFeed;
}
typesMappingStorage['KalturaDoubleClickDistributionProfile'] = KalturaDoubleClickDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZOUksTUFBTSw0Q0FBNkMsU0FBUSxzQ0FBc0M7Ozs7SUFVN0YsWUFBWSxJQUFpRDtRQUV6RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzlCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGNoYW5uZWxUaXRsZT8gOiBzdHJpbmc7XG5cdGNoYW5uZWxMaW5rPyA6IHN0cmluZztcblx0Y2hhbm5lbERlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0Y3VlUG9pbnRzUHJvdmlkZXI/IDogc3RyaW5nO1xuXHRpdGVtc1BlclBhZ2U/IDogc3RyaW5nO1xuXHRpZ25vcmVTY2hlZHVsaW5nSW5GZWVkPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBjaGFubmVsVGl0bGUgOiBzdHJpbmc7XG5cdGNoYW5uZWxMaW5rIDogc3RyaW5nO1xuXHRjaGFubmVsRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZlZWRVcmwgOiBzdHJpbmc7XG5cdGN1ZVBvaW50c1Byb3ZpZGVyIDogc3RyaW5nO1xuXHRpdGVtc1BlclBhZ2UgOiBzdHJpbmc7XG5cdGlnbm9yZVNjaGVkdWxpbmdJbkZlZWQgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGNoYW5uZWxUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGN1ZVBvaW50c1Byb3ZpZGVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1zUGVyUGFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZ25vcmVTY2hlZHVsaW5nSW5GZWVkIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb2ZpbGU7Il19