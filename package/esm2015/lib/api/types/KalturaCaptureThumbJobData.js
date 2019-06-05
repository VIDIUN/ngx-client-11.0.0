/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaCaptureThumbJobDataArgs() { }
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.fileContainer;
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.actualSrcFileSyncLocalPath;
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.srcFileSyncRemoteUrl;
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.thumbParamsOutputId;
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.thumbAssetId;
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.srcAssetId;
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.srcAssetType;
/** @type {?|undefined} */
KalturaCaptureThumbJobDataArgs.prototype.thumbPath;
export class KalturaCaptureThumbJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaCaptureThumbJobData' },
            fileContainer: { type: 'o', subTypeConstructor: KalturaFileContainer, subType: 'KalturaFileContainer' },
            actualSrcFileSyncLocalPath: { type: 's' },
            srcFileSyncRemoteUrl: { type: 's' },
            thumbParamsOutputId: { type: 'n' },
            thumbAssetId: { type: 's' },
            srcAssetId: { type: 's' },
            srcAssetType: { type: 'es', subTypeConstructor: KalturaAssetType, subType: 'KalturaAssetType' },
            thumbPath: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.fileContainer;
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.actualSrcFileSyncLocalPath;
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.srcFileSyncRemoteUrl;
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.thumbParamsOutputId;
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.thumbAssetId;
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.srcAssetId;
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.srcAssetType;
    /** @type {?} */
    KalturaCaptureThumbJobData.prototype.thumbPath;
}
typesMappingStorage['KalturaCaptureThumbJobData'] = KalturaCaptureThumbJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHR1cmVUaHVtYkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0dXJlVGh1bWJKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3RFLE1BQU0saUNBQWtDLFNBQVEsY0FBYzs7OztJQVcxRCxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUMzRywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0Msb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDbkcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlQ29udGFpbmVyIH0gZnJvbSAnLi9LYWx0dXJhRmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2FwdHVyZVRodW1iSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBmaWxlQ29udGFpbmVyPyA6IEthbHR1cmFGaWxlQ29udGFpbmVyO1xuXHRhY3R1YWxTcmNGaWxlU3luY0xvY2FsUGF0aD8gOiBzdHJpbmc7XG5cdHNyY0ZpbGVTeW5jUmVtb3RlVXJsPyA6IHN0cmluZztcblx0dGh1bWJQYXJhbXNPdXRwdXRJZD8gOiBudW1iZXI7XG5cdHRodW1iQXNzZXRJZD8gOiBzdHJpbmc7XG5cdHNyY0Fzc2V0SWQ/IDogc3RyaW5nO1xuXHRzcmNBc3NldFR5cGU/IDogS2FsdHVyYUFzc2V0VHlwZTtcblx0dGh1bWJQYXRoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhcHR1cmVUaHVtYkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBmaWxlQ29udGFpbmVyIDogS2FsdHVyYUZpbGVDb250YWluZXI7XG5cdGFjdHVhbFNyY0ZpbGVTeW5jTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRzcmNGaWxlU3luY1JlbW90ZVVybCA6IHN0cmluZztcblx0dGh1bWJQYXJhbXNPdXRwdXRJZCA6IG51bWJlcjtcblx0dGh1bWJBc3NldElkIDogc3RyaW5nO1xuXHRzcmNBc3NldElkIDogc3RyaW5nO1xuXHRzcmNBc3NldFR5cGUgOiBLYWx0dXJhQXNzZXRUeXBlO1xuXHR0aHVtYlBhdGggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXB0dXJlVGh1bWJKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXB0dXJlVGh1bWJKb2JEYXRhJyB9LFxuXHRcdFx0XHRmaWxlQ29udGFpbmVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZUNvbnRhaW5lciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZUNvbnRhaW5lcicgfSxcblx0XHRcdFx0YWN0dWFsU3JjRmlsZVN5bmNMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3JjRmlsZVN5bmNSZW1vdGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJQYXJhbXNPdXRwdXRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3JjQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzcmNBc3NldFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBc3NldFR5cGUnIH0sXG5cdFx0XHRcdHRodW1iUGF0aCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2FwdHVyZVRodW1iSm9iRGF0YSddID0gS2FsdHVyYUNhcHR1cmVUaHVtYkpvYkRhdGE7Il19