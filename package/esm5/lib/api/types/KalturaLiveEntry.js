/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRecordStatus } from './KalturaRecordStatus';
import { KalturaDVRStatus } from './KalturaDVRStatus';
import { KalturaLiveStreamConfiguration } from './KalturaLiveStreamConfiguration';
import { KalturaLivePublishStatus } from './KalturaLivePublishStatus';
import { KalturaLiveStreamPushPublishConfiguration } from './KalturaLiveStreamPushPublishConfiguration';
import { KalturaLiveEntryRecordingOptions } from './KalturaLiveEntryRecordingOptions';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaViewMode } from './KalturaViewMode';
import { KalturaRecordingStatus } from './KalturaRecordingStatus';
import { KalturaMediaEntry } from './KalturaMediaEntry';
/**
 * @record
 */
export function KalturaLiveEntryArgs() { }
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.offlineMessage;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.recordStatus;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.dvrStatus;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.dvrWindow;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.lastElapsedRecordingTime;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.liveStreamConfigurations;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.recordedEntryId;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.pushPublishEnabled;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.publishConfigurations;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.currentBroadcastStartTime;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.recordingOptions;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.segmentDuration;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.explicitLive;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.viewMode;
/** @type {?|undefined} */
KalturaLiveEntryArgs.prototype.recordingStatus;
var KalturaLiveEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveEntry, _super);
    function KalturaLiveEntry(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.liveStreamConfigurations === 'undefined')
            _this.liveStreamConfigurations = [];
        if (typeof _this.publishConfigurations === 'undefined')
            _this.publishConfigurations = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaLiveEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntry' },
            offlineMessage: { type: 's' },
            recordStatus: { type: 'en', subTypeConstructor: KalturaRecordStatus, subType: 'KalturaRecordStatus' },
            dvrStatus: { type: 'en', subTypeConstructor: KalturaDVRStatus, subType: 'KalturaDVRStatus' },
            dvrWindow: { type: 'n' },
            lastElapsedRecordingTime: { type: 'n' },
            liveStreamConfigurations: { type: 'a', subTypeConstructor: KalturaLiveStreamConfiguration, subType: 'KalturaLiveStreamConfiguration' },
            recordedEntryId: { type: 's' },
            pushPublishEnabled: { type: 'en', subTypeConstructor: KalturaLivePublishStatus, subType: 'KalturaLivePublishStatus' },
            publishConfigurations: { type: 'a', subTypeConstructor: KalturaLiveStreamPushPublishConfiguration, subType: 'KalturaLiveStreamPushPublishConfiguration' },
            firstBroadcast: { type: 'n', readOnly: true },
            lastBroadcast: { type: 'n', readOnly: true },
            currentBroadcastStartTime: { type: 'n' },
            recordingOptions: { type: 'o', subTypeConstructor: KalturaLiveEntryRecordingOptions, subType: 'KalturaLiveEntryRecordingOptions' },
            liveStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryServerNodeStatus, subType: 'KalturaEntryServerNodeStatus' },
            segmentDuration: { type: 'n' },
            explicitLive: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            viewMode: { type: 'en', subTypeConstructor: KalturaViewMode, subType: 'KalturaViewMode' },
            recordingStatus: { type: 'en', subTypeConstructor: KalturaRecordingStatus, subType: 'KalturaRecordingStatus' },
            lastBroadcastEndTime: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaLiveEntry;
}(KalturaMediaEntry));
export { KalturaLiveEntry };
if (false) {
    /** @type {?} */
    KalturaLiveEntry.prototype.offlineMessage;
    /** @type {?} */
    KalturaLiveEntry.prototype.recordStatus;
    /** @type {?} */
    KalturaLiveEntry.prototype.dvrStatus;
    /** @type {?} */
    KalturaLiveEntry.prototype.dvrWindow;
    /** @type {?} */
    KalturaLiveEntry.prototype.lastElapsedRecordingTime;
    /** @type {?} */
    KalturaLiveEntry.prototype.liveStreamConfigurations;
    /** @type {?} */
    KalturaLiveEntry.prototype.recordedEntryId;
    /** @type {?} */
    KalturaLiveEntry.prototype.pushPublishEnabled;
    /** @type {?} */
    KalturaLiveEntry.prototype.publishConfigurations;
    /** @type {?} */
    KalturaLiveEntry.prototype.firstBroadcast;
    /** @type {?} */
    KalturaLiveEntry.prototype.lastBroadcast;
    /** @type {?} */
    KalturaLiveEntry.prototype.currentBroadcastStartTime;
    /** @type {?} */
    KalturaLiveEntry.prototype.recordingOptions;
    /** @type {?} */
    KalturaLiveEntry.prototype.liveStatus;
    /** @type {?} */
    KalturaLiveEntry.prototype.segmentDuration;
    /** @type {?} */
    KalturaLiveEntry.prototype.explicitLive;
    /** @type {?} */
    KalturaLiveEntry.prototype.viewMode;
    /** @type {?} */
    KalturaLiveEntry.prototype.recordingStatus;
    /** @type {?} */
    KalturaLiveEntry.prototype.lastBroadcastEndTime;
}
typesMappingStorage['KalturaLiveEntry'] = KalturaLiveEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCL0UsSUFBQTtJQUFzQyw0Q0FBaUI7SUFzQm5ELDBCQUFZLElBQTRCO1FBQXhDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyx3QkFBd0IsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRSxDQUFD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bnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZWNvcmRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFSZWNvcmRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURWUlN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURWUlN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL0thbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVB1Ymxpc2hTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFMaXZlUHVibGlzaFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhVmlld01vZGUgfSBmcm9tICcuL0thbHR1cmFWaWV3TW9kZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVjb3JkaW5nU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhUmVjb3JkaW5nU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5LCBLYWx0dXJhTWVkaWFFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZUVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeUFyZ3Mge1xuICAgIG9mZmxpbmVNZXNzYWdlPyA6IHN0cmluZztcblx0cmVjb3JkU3RhdHVzPyA6IEthbHR1cmFSZWNvcmRTdGF0dXM7XG5cdGR2clN0YXR1cz8gOiBLYWx0dXJhRFZSU3RhdHVzO1xuXHRkdnJXaW5kb3c/IDogbnVtYmVyO1xuXHRsYXN0RWxhcHNlZFJlY29yZGluZ1RpbWU/IDogbnVtYmVyO1xuXHRsaXZlU3RyZWFtQ29uZmlndXJhdGlvbnM/IDogS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uW107XG5cdHJlY29yZGVkRW50cnlJZD8gOiBzdHJpbmc7XG5cdHB1c2hQdWJsaXNoRW5hYmxlZD8gOiBLYWx0dXJhTGl2ZVB1Ymxpc2hTdGF0dXM7XG5cdHB1Ymxpc2hDb25maWd1cmF0aW9ucz8gOiBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbltdO1xuXHRjdXJyZW50QnJvYWRjYXN0U3RhcnRUaW1lPyA6IG51bWJlcjtcblx0cmVjb3JkaW5nT3B0aW9ucz8gOiBLYWx0dXJhTGl2ZUVudHJ5UmVjb3JkaW5nT3B0aW9ucztcblx0c2VnbWVudER1cmF0aW9uPyA6IG51bWJlcjtcblx0ZXhwbGljaXRMaXZlPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHZpZXdNb2RlPyA6IEthbHR1cmFWaWV3TW9kZTtcblx0cmVjb3JkaW5nU3RhdHVzPyA6IEthbHR1cmFSZWNvcmRpbmdTdGF0dXM7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlRW50cnkgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeSB7XG5cbiAgICBvZmZsaW5lTWVzc2FnZSA6IHN0cmluZztcblx0cmVjb3JkU3RhdHVzIDogS2FsdHVyYVJlY29yZFN0YXR1cztcblx0ZHZyU3RhdHVzIDogS2FsdHVyYURWUlN0YXR1cztcblx0ZHZyV2luZG93IDogbnVtYmVyO1xuXHRsYXN0RWxhcHNlZFJlY29yZGluZ1RpbWUgOiBudW1iZXI7XG5cdGxpdmVTdHJlYW1Db25maWd1cmF0aW9ucyA6IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbltdO1xuXHRyZWNvcmRlZEVudHJ5SWQgOiBzdHJpbmc7XG5cdHB1c2hQdWJsaXNoRW5hYmxlZCA6IEthbHR1cmFMaXZlUHVibGlzaFN0YXR1cztcblx0cHVibGlzaENvbmZpZ3VyYXRpb25zIDogS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25bXTtcblx0cmVhZG9ubHkgZmlyc3RCcm9hZGNhc3QgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGxhc3RCcm9hZGNhc3QgOiBudW1iZXI7XG5cdGN1cnJlbnRCcm9hZGNhc3RTdGFydFRpbWUgOiBudW1iZXI7XG5cdHJlY29yZGluZ09wdGlvbnMgOiBLYWx0dXJhTGl2ZUVudHJ5UmVjb3JkaW5nT3B0aW9ucztcblx0cmVhZG9ubHkgbGl2ZVN0YXR1cyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXM7XG5cdHNlZ21lbnREdXJhdGlvbiA6IG51bWJlcjtcblx0ZXhwbGljaXRMaXZlIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dmlld01vZGUgOiBLYWx0dXJhVmlld01vZGU7XG5cdHJlY29yZGluZ1N0YXR1cyA6IEthbHR1cmFSZWNvcmRpbmdTdGF0dXM7XG5cdHJlYWRvbmx5IGxhc3RCcm9hZGNhc3RFbmRUaW1lIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5saXZlU3RyZWFtQ29uZmlndXJhdGlvbnMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMucHVibGlzaENvbmZpZ3VyYXRpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5wdWJsaXNoQ29uZmlndXJhdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZUVudHJ5JyB9LFxuXHRcdFx0XHRvZmZsaW5lTWVzc2FnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWNvcmRTdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVjb3JkU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFSZWNvcmRTdGF0dXMnIH0sXG5cdFx0XHRcdGR2clN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEVlJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURWUlN0YXR1cycgfSxcblx0XHRcdFx0ZHZyV2luZG93IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhc3RFbGFwc2VkUmVjb3JkaW5nVGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsaXZlU3RyZWFtQ29uZmlndXJhdGlvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24nIH0sXG5cdFx0XHRcdHJlY29yZGVkRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwdXNoUHVibGlzaEVuYWJsZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVB1Ymxpc2hTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVQdWJsaXNoU3RhdHVzJyB9LFxuXHRcdFx0XHRwdWJsaXNoQ29uZmlndXJhdGlvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uJyB9LFxuXHRcdFx0XHRmaXJzdEJyb2FkY2FzdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxhc3RCcm9hZGNhc3QgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjdXJyZW50QnJvYWRjYXN0U3RhcnRUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlY29yZGluZ09wdGlvbnMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zJyB9LFxuXHRcdFx0XHRsaXZlU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMnIH0sXG5cdFx0XHRcdHNlZ21lbnREdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRleHBsaWNpdExpdmUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHZpZXdNb2RlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpZXdNb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFWaWV3TW9kZScgfSxcblx0XHRcdFx0cmVjb3JkaW5nU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlY29yZGluZ1N0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhUmVjb3JkaW5nU3RhdHVzJyB9LFxuXHRcdFx0XHRsYXN0QnJvYWRjYXN0RW5kVGltZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlRW50cnknXSA9IEthbHR1cmFMaXZlRW50cnk7Il19