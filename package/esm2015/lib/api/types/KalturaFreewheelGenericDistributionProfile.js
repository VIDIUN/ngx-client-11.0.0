/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaFreewheelGenericDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.apikey;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.email;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.sftpPass;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.sftpLogin;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.contentOwner;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.upstreamVideoId;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.upstreamNetworkName;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.upstreamNetworkId;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.replaceGroup;
/** @type {?|undefined} */
KalturaFreewheelGenericDistributionProfileArgs.prototype.replaceAirDates;
export class KalturaFreewheelGenericDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaFreewheelGenericDistributionProfile' },
            apikey: { type: 's' },
            email: { type: 's' },
            sftpPass: { type: 's' },
            sftpLogin: { type: 's' },
            contentOwner: { type: 's' },
            upstreamVideoId: { type: 's' },
            upstreamNetworkName: { type: 's' },
            upstreamNetworkId: { type: 's' },
            categoryId: { type: 's' },
            replaceGroup: { type: 'b' },
            replaceAirDates: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.apikey;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.email;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.sftpPass;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.sftpLogin;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.contentOwner;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.upstreamVideoId;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.upstreamNetworkName;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.upstreamNetworkId;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.categoryId;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.replaceGroup;
    /** @type {?} */
    KalturaFreewheelGenericDistributionProfile.prototype.replaceAirDates;
}
typesMappingStorage['KalturaFreewheelGenericDistributionProfile'] = KalturaFreewheelGenericDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCOUksTUFBTSxpREFBa0QsU0FBUSxzQ0FBc0M7Ozs7SUFjbEcsWUFBWSxJQUFzRDtRQUU5RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNENBQTRDLEVBQUU7WUFDL0YsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0Q0FBNEMsQ0FBQyxHQUFHLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgYXBpa2V5PyA6IHN0cmluZztcblx0ZW1haWw/IDogc3RyaW5nO1xuXHRzZnRwUGFzcz8gOiBzdHJpbmc7XG5cdHNmdHBMb2dpbj8gOiBzdHJpbmc7XG5cdGNvbnRlbnRPd25lcj8gOiBzdHJpbmc7XG5cdHVwc3RyZWFtVmlkZW9JZD8gOiBzdHJpbmc7XG5cdHVwc3RyZWFtTmV0d29ya05hbWU/IDogc3RyaW5nO1xuXHR1cHN0cmVhbU5ldHdvcmtJZD8gOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWQ/IDogc3RyaW5nO1xuXHRyZXBsYWNlR3JvdXA/IDogYm9vbGVhbjtcblx0cmVwbGFjZUFpckRhdGVzPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGcmVld2hlZWxHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIGFwaWtleSA6IHN0cmluZztcblx0ZW1haWwgOiBzdHJpbmc7XG5cdHNmdHBQYXNzIDogc3RyaW5nO1xuXHRzZnRwTG9naW4gOiBzdHJpbmc7XG5cdGNvbnRlbnRPd25lciA6IHN0cmluZztcblx0dXBzdHJlYW1WaWRlb0lkIDogc3RyaW5nO1xuXHR1cHN0cmVhbU5ldHdvcmtOYW1lIDogc3RyaW5nO1xuXHR1cHN0cmVhbU5ldHdvcmtJZCA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZCA6IHN0cmluZztcblx0cmVwbGFjZUdyb3VwIDogYm9vbGVhbjtcblx0cmVwbGFjZUFpckRhdGVzIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGcmVld2hlZWxHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0YXBpa2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBQYXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBMb2dpbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50T3duZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBzdHJlYW1WaWRlb0lkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwc3RyZWFtTmV0d29ya05hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBzdHJlYW1OZXR3b3JrSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXBsYWNlR3JvdXAgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cmVwbGFjZUFpckRhdGVzIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGcmVld2hlZWxHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==