/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveEntry extends KalturaMediaEntry {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.liveStreamConfigurations === 'undefined')
            this.liveStreamConfigurations = [];
        if (typeof this.publishConfigurations === 'undefined')
            this.publishConfigurations = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUIvRSxNQUFNLHVCQUF3QixTQUFRLGlCQUFpQjs7OztJQXNCbkQsWUFBWSxJQUE0QjtRQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFB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dHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlY29yZFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVJlY29yZFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRFZSU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRFZSU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uJztcbmltcG9ydCB7IEthbHR1cmFMaXZlUHVibGlzaFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUxpdmVQdWJsaXNoU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUVudHJ5UmVjb3JkaW5nT3B0aW9ucyB9IGZyb20gJy4vS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFWaWV3TW9kZSB9IGZyb20gJy4vS2FsdHVyYVZpZXdNb2RlJztcbmltcG9ydCB7IEthbHR1cmFSZWNvcmRpbmdTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFSZWNvcmRpbmdTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnksIEthbHR1cmFNZWRpYUVudHJ5QXJncyB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlRW50cnlBcmdzICBleHRlbmRzIEthbHR1cmFNZWRpYUVudHJ5QXJncyB7XG4gICAgb2ZmbGluZU1lc3NhZ2U/IDogc3RyaW5nO1xuXHRyZWNvcmRTdGF0dXM/IDogS2FsdHVyYVJlY29yZFN0YXR1cztcblx0ZHZyU3RhdHVzPyA6IEthbHR1cmFEVlJTdGF0dXM7XG5cdGR2cldpbmRvdz8gOiBudW1iZXI7XG5cdGxhc3RFbGFwc2VkUmVjb3JkaW5nVGltZT8gOiBudW1iZXI7XG5cdGxpdmVTdHJlYW1Db25maWd1cmF0aW9ucz8gOiBLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb25bXTtcblx0cmVjb3JkZWRFbnRyeUlkPyA6IHN0cmluZztcblx0cHVzaFB1Ymxpc2hFbmFibGVkPyA6IEthbHR1cmFMaXZlUHVibGlzaFN0YXR1cztcblx0cHVibGlzaENvbmZpZ3VyYXRpb25zPyA6IEthbHR1cmFMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uW107XG5cdGN1cnJlbnRCcm9hZGNhc3RTdGFydFRpbWU/IDogbnVtYmVyO1xuXHRyZWNvcmRpbmdPcHRpb25zPyA6IEthbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zO1xuXHRzZWdtZW50RHVyYXRpb24/IDogbnVtYmVyO1xuXHRleHBsaWNpdExpdmU/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dmlld01vZGU/IDogS2FsdHVyYVZpZXdNb2RlO1xuXHRyZWNvcmRpbmdTdGF0dXM/IDogS2FsdHVyYVJlY29yZGluZ1N0YXR1cztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVFbnRyeSBleHRlbmRzIEthbHR1cmFNZWRpYUVudHJ5IHtcblxuICAgIG9mZmxpbmVNZXNzYWdlIDogc3RyaW5nO1xuXHRyZWNvcmRTdGF0dXMgOiBLYWx0dXJhUmVjb3JkU3RhdHVzO1xuXHRkdnJTdGF0dXMgOiBLYWx0dXJhRFZSU3RhdHVzO1xuXHRkdnJXaW5kb3cgOiBudW1iZXI7XG5cdGxhc3RFbGFwc2VkUmVjb3JkaW5nVGltZSA6IG51bWJlcjtcblx0bGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb25zIDogS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uW107XG5cdHJlY29yZGVkRW50cnlJZCA6IHN0cmluZztcblx0cHVzaFB1Ymxpc2hFbmFibGVkIDogS2FsdHVyYUxpdmVQdWJsaXNoU3RhdHVzO1xuXHRwdWJsaXNoQ29uZmlndXJhdGlvbnMgOiBLYWx0dXJhTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbltdO1xuXHRyZWFkb25seSBmaXJzdEJyb2FkY2FzdCA6IG51bWJlcjtcblx0cmVhZG9ubHkgbGFzdEJyb2FkY2FzdCA6IG51bWJlcjtcblx0Y3VycmVudEJyb2FkY2FzdFN0YXJ0VGltZSA6IG51bWJlcjtcblx0cmVjb3JkaW5nT3B0aW9ucyA6IEthbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zO1xuXHRyZWFkb25seSBsaXZlU3RhdHVzIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcblx0c2VnbWVudER1cmF0aW9uIDogbnVtYmVyO1xuXHRleHBsaWNpdExpdmUgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHR2aWV3TW9kZSA6IEthbHR1cmFWaWV3TW9kZTtcblx0cmVjb3JkaW5nU3RhdHVzIDogS2FsdHVyYVJlY29yZGluZ1N0YXR1cztcblx0cmVhZG9ubHkgbGFzdEJyb2FkY2FzdEVuZFRpbWUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlRW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5saXZlU3RyZWFtQ29uZmlndXJhdGlvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmxpdmVTdHJlYW1Db25maWd1cmF0aW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5wdWJsaXNoQ29uZmlndXJhdGlvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnB1Ymxpc2hDb25maWd1cmF0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlRW50cnknIH0sXG5cdFx0XHRcdG9mZmxpbmVNZXNzYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlY29yZFN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZWNvcmRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVJlY29yZFN0YXR1cycgfSxcblx0XHRcdFx0ZHZyU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURWUlN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRFZSU3RhdHVzJyB9LFxuXHRcdFx0XHRkdnJXaW5kb3cgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdEVsYXBzZWRSZWNvcmRpbmdUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxpdmVTdHJlYW1Db25maWd1cmF0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbicgfSxcblx0XHRcdFx0cmVjb3JkZWRFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHB1c2hQdWJsaXNoRW5hYmxlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlUHVibGlzaFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVB1Ymxpc2hTdGF0dXMnIH0sXG5cdFx0XHRcdHB1Ymxpc2hDb25maWd1cmF0aW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb24nIH0sXG5cdFx0XHRcdGZpcnN0QnJvYWRjYXN0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bGFzdEJyb2FkY2FzdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGN1cnJlbnRCcm9hZGNhc3RTdGFydFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVjb3JkaW5nT3B0aW9ucyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMnIH0sXG5cdFx0XHRcdGxpdmVTdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cycgfSxcblx0XHRcdFx0c2VnbWVudER1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGV4cGxpY2l0TGl2ZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0dmlld01vZGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmlld01vZGUsIHN1YlR5cGUgOiAnS2FsdHVyYVZpZXdNb2RlJyB9LFxuXHRcdFx0XHRyZWNvcmRpbmdTdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVjb3JkaW5nU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFSZWNvcmRpbmdTdGF0dXMnIH0sXG5cdFx0XHRcdGxhc3RCcm9hZGNhc3RFbmRUaW1lIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVFbnRyeSddID0gS2FsdHVyYUxpdmVFbnRyeTsiXX0=