/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaCaptureThumbJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptureThumbJobData, _super);
    function KalturaCaptureThumbJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptureThumbJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaCaptureThumbJobData;
}(KalturaJobData));
export { KalturaCaptureThumbJobData };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHR1cmVUaHVtYkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0dXJlVGh1bWJKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN0RSxJQUFBO0lBQWdELHNEQUFjO0lBVzFELG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDM0csMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ25HLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FwREw7RUFrQmdELGNBQWMsRUFtQzdELENBQUE7QUFuQ0Qsc0NBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZUNvbnRhaW5lciB9IGZyb20gJy4vS2FsdHVyYUZpbGVDb250YWluZXInO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUFzc2V0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhcHR1cmVUaHVtYkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZmlsZUNvbnRhaW5lcj8gOiBLYWx0dXJhRmlsZUNvbnRhaW5lcjtcblx0YWN0dWFsU3JjRmlsZVN5bmNMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRzcmNGaWxlU3luY1JlbW90ZVVybD8gOiBzdHJpbmc7XG5cdHRodW1iUGFyYW1zT3V0cHV0SWQ/IDogbnVtYmVyO1xuXHR0aHVtYkFzc2V0SWQ/IDogc3RyaW5nO1xuXHRzcmNBc3NldElkPyA6IHN0cmluZztcblx0c3JjQXNzZXRUeXBlPyA6IEthbHR1cmFBc3NldFR5cGU7XG5cdHRodW1iUGF0aD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXB0dXJlVGh1bWJKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgZmlsZUNvbnRhaW5lciA6IEthbHR1cmFGaWxlQ29udGFpbmVyO1xuXHRhY3R1YWxTcmNGaWxlU3luY0xvY2FsUGF0aCA6IHN0cmluZztcblx0c3JjRmlsZVN5bmNSZW1vdGVVcmwgOiBzdHJpbmc7XG5cdHRodW1iUGFyYW1zT3V0cHV0SWQgOiBudW1iZXI7XG5cdHRodW1iQXNzZXRJZCA6IHN0cmluZztcblx0c3JjQXNzZXRJZCA6IHN0cmluZztcblx0c3JjQXNzZXRUeXBlIDogS2FsdHVyYUFzc2V0VHlwZTtcblx0dGh1bWJQYXRoIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2FwdHVyZVRodW1iSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2FwdHVyZVRodW1iSm9iRGF0YScgfSxcblx0XHRcdFx0ZmlsZUNvbnRhaW5lciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVDb250YWluZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVDb250YWluZXInIH0sXG5cdFx0XHRcdGFjdHVhbFNyY0ZpbGVTeW5jTG9jYWxQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNyY0ZpbGVTeW5jUmVtb3RlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zT3V0cHV0SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGh1bWJBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNyY0Fzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3JjQXNzZXRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFzc2V0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXRUeXBlJyB9LFxuXHRcdFx0XHR0aHVtYlBhdGggOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNhcHR1cmVUaHVtYkpvYkRhdGEnXSA9IEthbHR1cmFDYXB0dXJlVGh1bWJKb2JEYXRhOyJdfQ==