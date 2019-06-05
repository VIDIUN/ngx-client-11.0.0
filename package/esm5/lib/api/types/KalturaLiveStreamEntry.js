/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamBitrate } from './KalturaLiveStreamBitrate';
import { KalturaLiveEntry } from './KalturaLiveEntry';
/**
 * @record
 */
export function KalturaLiveStreamEntryArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.bitrates;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.primaryBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.secondaryBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.primaryRtspBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.secondaryRtspBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.streamName;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.streamUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.hlsStreamUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.urlManager;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.encodingIP1;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.encodingIP2;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.streamPassword;
var KalturaLiveStreamEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamEntry, _super);
    function KalturaLiveStreamEntry(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.bitrates === 'undefined')
            _this.bitrates = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamEntry' },
            streamRemoteId: { type: 's', readOnly: true },
            streamRemoteBackupId: { type: 's', readOnly: true },
            bitrates: { type: 'a', subTypeConstructor: KalturaLiveStreamBitrate, subType: 'KalturaLiveStreamBitrate' },
            primaryBroadcastingUrl: { type: 's' },
            secondaryBroadcastingUrl: { type: 's' },
            primaryRtspBroadcastingUrl: { type: 's' },
            secondaryRtspBroadcastingUrl: { type: 's' },
            streamName: { type: 's' },
            streamUrl: { type: 's' },
            hlsStreamUrl: { type: 's' },
            urlManager: { type: 's' },
            encodingIP1: { type: 's' },
            encodingIP2: { type: 's' },
            streamPassword: { type: 's' },
            streamUsername: { type: 's', readOnly: true },
            primaryServerNodeId: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaLiveStreamEntry;
}(KalturaLiveEntry));
export { KalturaLiveStreamEntry };
if (false) {
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamRemoteId;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamRemoteBackupId;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.bitrates;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.primaryBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.secondaryBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.primaryRtspBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.secondaryRtspBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamName;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.hlsStreamUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.urlManager;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.encodingIP1;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.encodingIP2;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamPassword;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamUsername;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.primaryServerNodeId;
}
typesMappingStorage['KalturaLiveStreamEntry'] = KalturaLiveStreamEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1FbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVTdHJlYW1FbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0I1RSxJQUFBO0lBQTRDLGtEQUFnQjtJQW1CeEQsZ0NBQVksSUFBa0M7UUFBOUMsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7S0FDaEU7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDaEQsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdEQsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDOUcsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ2hELG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1NBQzVDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBeEVMO0VBcUI0QyxnQkFBZ0IsRUFvRDNELENBQUE7QUFwREQsa0NBb0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGUnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVFbnRyeSwgS2FsdHVyYUxpdmVFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlU3RyZWFtRW50cnlBcmdzICBleHRlbmRzIEthbHR1cmFMaXZlRW50cnlBcmdzIHtcbiAgICBiaXRyYXRlcz8gOiBLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGVbXTtcblx0cHJpbWFyeUJyb2FkY2FzdGluZ1VybD8gOiBzdHJpbmc7XG5cdHNlY29uZGFyeUJyb2FkY2FzdGluZ1VybD8gOiBzdHJpbmc7XG5cdHByaW1hcnlSdHNwQnJvYWRjYXN0aW5nVXJsPyA6IHN0cmluZztcblx0c2Vjb25kYXJ5UnRzcEJyb2FkY2FzdGluZ1VybD8gOiBzdHJpbmc7XG5cdHN0cmVhbU5hbWU/IDogc3RyaW5nO1xuXHRzdHJlYW1Vcmw/IDogc3RyaW5nO1xuXHRobHNTdHJlYW1Vcmw/IDogc3RyaW5nO1xuXHR1cmxNYW5hZ2VyPyA6IHN0cmluZztcblx0ZW5jb2RpbmdJUDE/IDogc3RyaW5nO1xuXHRlbmNvZGluZ0lQMj8gOiBzdHJpbmc7XG5cdHN0cmVhbVBhc3N3b3JkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVTdHJlYW1FbnRyeSBleHRlbmRzIEthbHR1cmFMaXZlRW50cnkge1xuXG4gICAgcmVhZG9ubHkgc3RyZWFtUmVtb3RlSWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN0cmVhbVJlbW90ZUJhY2t1cElkIDogc3RyaW5nO1xuXHRiaXRyYXRlcyA6IEthbHR1cmFMaXZlU3RyZWFtQml0cmF0ZVtdO1xuXHRwcmltYXJ5QnJvYWRjYXN0aW5nVXJsIDogc3RyaW5nO1xuXHRzZWNvbmRhcnlCcm9hZGNhc3RpbmdVcmwgOiBzdHJpbmc7XG5cdHByaW1hcnlSdHNwQnJvYWRjYXN0aW5nVXJsIDogc3RyaW5nO1xuXHRzZWNvbmRhcnlSdHNwQnJvYWRjYXN0aW5nVXJsIDogc3RyaW5nO1xuXHRzdHJlYW1OYW1lIDogc3RyaW5nO1xuXHRzdHJlYW1VcmwgOiBzdHJpbmc7XG5cdGhsc1N0cmVhbVVybCA6IHN0cmluZztcblx0dXJsTWFuYWdlciA6IHN0cmluZztcblx0ZW5jb2RpbmdJUDEgOiBzdHJpbmc7XG5cdGVuY29kaW5nSVAyIDogc3RyaW5nO1xuXHRzdHJlYW1QYXNzd29yZCA6IHN0cmluZztcblx0cmVhZG9ubHkgc3RyZWFtVXNlcm5hbWUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHByaW1hcnlTZXJ2ZXJOb2RlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RyZWFtRW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5iaXRyYXRlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYml0cmF0ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5JyB9LFxuXHRcdFx0XHRzdHJlYW1SZW1vdGVJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN0cmVhbVJlbW90ZUJhY2t1cElkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Yml0cmF0ZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtQml0cmF0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGUnIH0sXG5cdFx0XHRcdHByaW1hcnlCcm9hZGNhc3RpbmdVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Vjb25kYXJ5QnJvYWRjYXN0aW5nVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW1hcnlSdHNwQnJvYWRjYXN0aW5nVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlY29uZGFyeVJ0c3BCcm9hZGNhc3RpbmdVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RyZWFtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1VcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aGxzU3RyZWFtVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVybE1hbmFnZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5jb2RpbmdJUDEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5jb2RpbmdJUDIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RyZWFtUGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RyZWFtVXNlcm5hbWUgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwcmltYXJ5U2VydmVyTm9kZUlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdHJlYW1FbnRyeSddID0gS2FsdHVyYUxpdmVTdHJlYW1FbnRyeTsiXX0=