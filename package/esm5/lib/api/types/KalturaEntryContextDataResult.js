/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaPluginData } from './KalturaPluginData';
import { KalturaContextDataResult } from './KalturaContextDataResult';
/**
 * @record
 */
export function KalturaEntryContextDataResultArgs() { }
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isSiteRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isCountryRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isSessionRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isIpAddressRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isUserAgentRestricted;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.previewLength;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isScheduledNow;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.isAdmin;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.streamerType;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.mediaProtocol;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.storageProfilesXML;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.accessControlMessages;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.accessControlActions;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.flavorAssets;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.msDuration;
/** @type {?|undefined} */
KalturaEntryContextDataResultArgs.prototype.pluginData;
var KalturaEntryContextDataResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryContextDataResult, _super);
    function KalturaEntryContextDataResult(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.accessControlMessages === 'undefined')
            _this.accessControlMessages = [];
        if (typeof _this.accessControlActions === 'undefined')
            _this.accessControlActions = [];
        if (typeof _this.flavorAssets === 'undefined')
            _this.flavorAssets = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEntryContextDataResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryContextDataResult' },
            isSiteRestricted: { type: 'b' },
            isCountryRestricted: { type: 'b' },
            isSessionRestricted: { type: 'b' },
            isIpAddressRestricted: { type: 'b' },
            isUserAgentRestricted: { type: 'b' },
            previewLength: { type: 'n' },
            isScheduledNow: { type: 'b' },
            isAdmin: { type: 'b' },
            streamerType: { type: 's' },
            mediaProtocol: { type: 's' },
            storageProfilesXML: { type: 's' },
            accessControlMessages: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            accessControlActions: { type: 'a', subTypeConstructor: KalturaRuleAction, subType: 'KalturaRuleAction' },
            flavorAssets: { type: 'a', subTypeConstructor: KalturaFlavorAsset, subType: 'KalturaFlavorAsset' },
            msDuration: { type: 'n' },
            pluginData: { type: 'm', subTypeConstructor: KalturaPluginData, subType: 'KalturaPluginData' }
        });
        return result;
    };
    return KalturaEntryContextDataResult;
}(KalturaContextDataResult));
export { KalturaEntryContextDataResult };
if (false) {
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isSiteRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isCountryRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isSessionRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isIpAddressRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isUserAgentRestricted;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.previewLength;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isScheduledNow;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.isAdmin;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.streamerType;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.mediaProtocol;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.storageProfilesXML;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.accessControlMessages;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.accessControlActions;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.flavorAssets;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.msDuration;
    /** @type {?} */
    KalturaEntryContextDataResult.prototype.pluginData;
}
typesMappingStorage['KalturaEntryContextDataResult'] = KalturaEntryContextDataResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQnBHLElBQUE7SUFBbUQseURBQXdCO0lBbUJ2RSx1Q0FBWSxJQUF5QztRQUFyRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUlkO1FBSEcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMscUJBQXFCLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUM3RixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxvQkFBb0IsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQ3JGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7S0FDbEU7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3JHLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDNUcsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdEcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUN6RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQWpGTDtFQTRCbUQsd0JBQXdCLEVBc0QxRSxDQUFBO0FBdERELHlDQXNEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGVBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFSdWxlQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldCB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0JztcbmltcG9ydCB7IEthbHR1cmFQbHVnaW5EYXRhIH0gZnJvbSAnLi9LYWx0dXJhUGx1Z2luRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGV4dERhdGFSZXN1bHQsIEthbHR1cmFDb250ZXh0RGF0YVJlc3VsdEFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb250ZXh0RGF0YVJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHRBcmdzICBleHRlbmRzIEthbHR1cmFDb250ZXh0RGF0YVJlc3VsdEFyZ3Mge1xuICAgIGlzU2l0ZVJlc3RyaWN0ZWQ/IDogYm9vbGVhbjtcblx0aXNDb3VudHJ5UmVzdHJpY3RlZD8gOiBib29sZWFuO1xuXHRpc1Nlc3Npb25SZXN0cmljdGVkPyA6IGJvb2xlYW47XG5cdGlzSXBBZGRyZXNzUmVzdHJpY3RlZD8gOiBib29sZWFuO1xuXHRpc1VzZXJBZ2VudFJlc3RyaWN0ZWQ/IDogYm9vbGVhbjtcblx0cHJldmlld0xlbmd0aD8gOiBudW1iZXI7XG5cdGlzU2NoZWR1bGVkTm93PyA6IGJvb2xlYW47XG5cdGlzQWRtaW4/IDogYm9vbGVhbjtcblx0c3RyZWFtZXJUeXBlPyA6IHN0cmluZztcblx0bWVkaWFQcm90b2NvbD8gOiBzdHJpbmc7XG5cdHN0b3JhZ2VQcm9maWxlc1hNTD8gOiBzdHJpbmc7XG5cdGFjY2Vzc0NvbnRyb2xNZXNzYWdlcz8gOiBLYWx0dXJhU3RyaW5nW107XG5cdGFjY2Vzc0NvbnRyb2xBY3Rpb25zPyA6IEthbHR1cmFSdWxlQWN0aW9uW107XG5cdGZsYXZvckFzc2V0cz8gOiBLYWx0dXJhRmxhdm9yQXNzZXRbXTtcblx0bXNEdXJhdGlvbj8gOiBudW1iZXI7XG5cdHBsdWdpbkRhdGE/IDogeyBba2V5IDogc3RyaW5nXSA6IEthbHR1cmFQbHVnaW5EYXRhfTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQgZXh0ZW5kcyBLYWx0dXJhQ29udGV4dERhdGFSZXN1bHQge1xuXG4gICAgaXNTaXRlUmVzdHJpY3RlZCA6IGJvb2xlYW47XG5cdGlzQ291bnRyeVJlc3RyaWN0ZWQgOiBib29sZWFuO1xuXHRpc1Nlc3Npb25SZXN0cmljdGVkIDogYm9vbGVhbjtcblx0aXNJcEFkZHJlc3NSZXN0cmljdGVkIDogYm9vbGVhbjtcblx0aXNVc2VyQWdlbnRSZXN0cmljdGVkIDogYm9vbGVhbjtcblx0cHJldmlld0xlbmd0aCA6IG51bWJlcjtcblx0aXNTY2hlZHVsZWROb3cgOiBib29sZWFuO1xuXHRpc0FkbWluIDogYm9vbGVhbjtcblx0c3RyZWFtZXJUeXBlIDogc3RyaW5nO1xuXHRtZWRpYVByb3RvY29sIDogc3RyaW5nO1xuXHRzdG9yYWdlUHJvZmlsZXNYTUwgOiBzdHJpbmc7XG5cdGFjY2Vzc0NvbnRyb2xNZXNzYWdlcyA6IEthbHR1cmFTdHJpbmdbXTtcblx0YWNjZXNzQ29udHJvbEFjdGlvbnMgOiBLYWx0dXJhUnVsZUFjdGlvbltdO1xuXHRmbGF2b3JBc3NldHMgOiBLYWx0dXJhRmxhdm9yQXNzZXRbXTtcblx0bXNEdXJhdGlvbiA6IG51bWJlcjtcblx0cGx1Z2luRGF0YSA6IHsgW2tleSA6IHN0cmluZ10gOiBLYWx0dXJhUGx1Z2luRGF0YX07XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYWNjZXNzQ29udHJvbE1lc3NhZ2VzID09PSAndW5kZWZpbmVkJykgdGhpcy5hY2Nlc3NDb250cm9sTWVzc2FnZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuYWNjZXNzQ29udHJvbEFjdGlvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmFjY2Vzc0NvbnRyb2xBY3Rpb25zID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmZsYXZvckFzc2V0cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZmxhdm9yQXNzZXRzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQnIH0sXG5cdFx0XHRcdGlzU2l0ZVJlc3RyaWN0ZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0aXNDb3VudHJ5UmVzdHJpY3RlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRpc1Nlc3Npb25SZXN0cmljdGVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGlzSXBBZGRyZXNzUmVzdHJpY3RlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRpc1VzZXJBZ2VudFJlc3RyaWN0ZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cHJldmlld0xlbmd0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc1NjaGVkdWxlZE5vdyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRpc0FkbWluIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHN0cmVhbWVyVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYVByb3RvY29sIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0b3JhZ2VQcm9maWxlc1hNTCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY2Nlc3NDb250cm9sTWVzc2FnZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfSxcblx0XHRcdFx0YWNjZXNzQ29udHJvbEFjdGlvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSdWxlQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFSdWxlQWN0aW9uJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JBc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yQXNzZXQnIH0sXG5cdFx0XHRcdG1zRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGx1Z2luRGF0YSA6IHsgdHlwZSA6ICdtJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsdWdpbkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYVBsdWdpbkRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0J10gPSBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVJlc3VsdDsiXX0=