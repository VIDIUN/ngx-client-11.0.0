/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaVirusScanJobResult } from './KalturaVirusScanJobResult';
import { KalturaVirusFoundAction } from './KalturaVirusFoundAction';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaVirusScanJobDataArgs() { }
/** @type {?|undefined} */
KalturaVirusScanJobDataArgs.prototype.fileContainer;
/** @type {?|undefined} */
KalturaVirusScanJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaVirusScanJobDataArgs.prototype.scanResult;
/** @type {?|undefined} */
KalturaVirusScanJobDataArgs.prototype.virusFoundAction;
var KalturaVirusScanJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaVirusScanJobData, _super);
    function KalturaVirusScanJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaVirusScanJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaVirusScanJobData' },
            fileContainer: { type: 'o', subTypeConstructor: KalturaFileContainer, subType: 'KalturaFileContainer' },
            flavorAssetId: { type: 's' },
            scanResult: { type: 'en', subTypeConstructor: KalturaVirusScanJobResult, subType: 'KalturaVirusScanJobResult' },
            virusFoundAction: { type: 'en', subTypeConstructor: KalturaVirusFoundAction, subType: 'KalturaVirusFoundAction' }
        });
        return result;
    };
    return KalturaVirusScanJobData;
}(KalturaJobData));
export { KalturaVirusScanJobData };
if (false) {
    /** @type {?} */
    KalturaVirusScanJobData.prototype.fileContainer;
    /** @type {?} */
    KalturaVirusScanJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaVirusScanJobData.prototype.scanResult;
    /** @type {?} */
    KalturaVirusScanJobData.prototype.virusFoundAction;
}
typesMappingStorage['KalturaVirusScanJobData'] = KalturaVirusScanJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpcnVzU2NhbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWaXJ1c1NjYW5Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVdEUsSUFBQTtJQUE2QyxtREFBYztJQU92RCxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzNHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDbkgsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUM1RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQXpDTDtFQWU2QyxjQUFjLEVBMkIxRCxDQUFBO0FBM0JELG1DQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlQ29udGFpbmVyIH0gZnJvbSAnLi9LYWx0dXJhRmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBLYWx0dXJhVmlydXNTY2FuSm9iUmVzdWx0IH0gZnJvbSAnLi9LYWx0dXJhVmlydXNTY2FuSm9iUmVzdWx0JztcbmltcG9ydCB7IEthbHR1cmFWaXJ1c0ZvdW5kQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhVmlydXNGb3VuZEFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZpcnVzU2NhbkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZmlsZUNvbnRhaW5lcj8gOiBLYWx0dXJhRmlsZUNvbnRhaW5lcjtcblx0Zmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdHNjYW5SZXN1bHQ/IDogS2FsdHVyYVZpcnVzU2NhbkpvYlJlc3VsdDtcblx0dmlydXNGb3VuZEFjdGlvbj8gOiBLYWx0dXJhVmlydXNGb3VuZEFjdGlvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZpcnVzU2NhbkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBmaWxlQ29udGFpbmVyIDogS2FsdHVyYUZpbGVDb250YWluZXI7XG5cdGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdHNjYW5SZXN1bHQgOiBLYWx0dXJhVmlydXNTY2FuSm9iUmVzdWx0O1xuXHR2aXJ1c0ZvdW5kQWN0aW9uIDogS2FsdHVyYVZpcnVzRm91bmRBY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFWaXJ1c1NjYW5Kb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWaXJ1c1NjYW5Kb2JEYXRhJyB9LFxuXHRcdFx0XHRmaWxlQ29udGFpbmVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZUNvbnRhaW5lciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZUNvbnRhaW5lcicgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY2FuUmVzdWx0IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzU2NhbkpvYlJlc3VsdCwgc3ViVHlwZSA6ICdLYWx0dXJhVmlydXNTY2FuSm9iUmVzdWx0JyB9LFxuXHRcdFx0XHR2aXJ1c0ZvdW5kQWN0aW9uIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzRm91bmRBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVZpcnVzRm91bmRBY3Rpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFWaXJ1c1NjYW5Kb2JEYXRhJ10gPSBLYWx0dXJhVmlydXNTY2FuSm9iRGF0YTsiXX0=