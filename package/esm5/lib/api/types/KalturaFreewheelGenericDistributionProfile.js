/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaFreewheelGenericDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFreewheelGenericDistributionProfile, _super);
    function KalturaFreewheelGenericDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFreewheelGenericDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaFreewheelGenericDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaFreewheelGenericDistributionProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjlJLElBQUE7SUFBZ0Usc0VBQXNDO0lBY2xHLG9EQUFZLElBQXNEO2VBRTlELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNENBQTRDLEVBQUU7WUFDL0YsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FEQTNETDtFQW1CZ0Usc0NBQXNDLEVBeUNyRyxDQUFBO0FBekNELHNEQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRDQUE0QyxDQUFDLEdBQUcsMENBQTBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGcmVld2hlZWxHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBhcGlrZXk/IDogc3RyaW5nO1xuXHRlbWFpbD8gOiBzdHJpbmc7XG5cdHNmdHBQYXNzPyA6IHN0cmluZztcblx0c2Z0cExvZ2luPyA6IHN0cmluZztcblx0Y29udGVudE93bmVyPyA6IHN0cmluZztcblx0dXBzdHJlYW1WaWRlb0lkPyA6IHN0cmluZztcblx0dXBzdHJlYW1OZXR3b3JrTmFtZT8gOiBzdHJpbmc7XG5cdHVwc3RyZWFtTmV0d29ya0lkPyA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZD8gOiBzdHJpbmc7XG5cdHJlcGxhY2VHcm91cD8gOiBib29sZWFuO1xuXHRyZXBsYWNlQWlyRGF0ZXM/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgYXBpa2V5IDogc3RyaW5nO1xuXHRlbWFpbCA6IHN0cmluZztcblx0c2Z0cFBhc3MgOiBzdHJpbmc7XG5cdHNmdHBMb2dpbiA6IHN0cmluZztcblx0Y29udGVudE93bmVyIDogc3RyaW5nO1xuXHR1cHN0cmVhbVZpZGVvSWQgOiBzdHJpbmc7XG5cdHVwc3RyZWFtTmV0d29ya05hbWUgOiBzdHJpbmc7XG5cdHVwc3RyZWFtTmV0d29ya0lkIDogc3RyaW5nO1xuXHRjYXRlZ29yeUlkIDogc3RyaW5nO1xuXHRyZXBsYWNlR3JvdXAgOiBib29sZWFuO1xuXHRyZXBsYWNlQWlyRGF0ZXMgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRhcGlrZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Z0cFBhc3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Z0cExvZ2luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRPd25lciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cHN0cmVhbVZpZGVvSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBzdHJlYW1OZXR3b3JrTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cHN0cmVhbU5ldHdvcmtJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlcGxhY2VHcm91cCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRyZXBsYWNlQWlyRGF0ZXMgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZyZWV3aGVlbEdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhRnJlZXdoZWVsR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGU7Il19