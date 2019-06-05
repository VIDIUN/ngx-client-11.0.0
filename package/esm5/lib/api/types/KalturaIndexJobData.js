/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaIndexJobDataArgs() { }
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.filter;
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.lastIndexId;
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.lastIndexDepth;
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.shouldUpdate;
var KalturaIndexJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIndexJobData, _super);
    function KalturaIndexJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIndexJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIndexJobData' },
            filter: { type: 'o', subTypeConstructor: KalturaFilter, subType: 'KalturaFilter' },
            lastIndexId: { type: 'n' },
            lastIndexDepth: { type: 'n' },
            shouldUpdate: { type: 'b' }
        });
        return result;
    };
    return KalturaIndexJobData;
}(KalturaJobData));
export { KalturaIndexJobData };
if (false) {
    /** @type {?} */
    KalturaIndexJobData.prototype.filter;
    /** @type {?} */
    KalturaIndexJobData.prototype.lastIndexId;
    /** @type {?} */
    KalturaIndexJobData.prototype.lastIndexDepth;
    /** @type {?} */
    KalturaIndexJobData.prototype.shouldUpdate;
}
typesMappingStorage['KalturaIndexJobData'] = KalturaIndexJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUluZGV4Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUluZGV4Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVV0RSxJQUFBO0lBQXlDLCtDQUFjO0lBT25ELDZCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUN0RixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhCQXZDTDtFQWF5QyxjQUFjLEVBMkJ0RCxDQUFBO0FBM0JELCtCQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJbmRleEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFGaWx0ZXI7XG5cdGxhc3RJbmRleElkPyA6IG51bWJlcjtcblx0bGFzdEluZGV4RGVwdGg/IDogbnVtYmVyO1xuXHRzaG91bGRVcGRhdGU/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUluZGV4Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFGaWx0ZXI7XG5cdGxhc3RJbmRleElkIDogbnVtYmVyO1xuXHRsYXN0SW5kZXhEZXB0aCA6IG51bWJlcjtcblx0c2hvdWxkVXBkYXRlIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUluZGV4Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSW5kZXhKb2JEYXRhJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlcicgfSxcblx0XHRcdFx0bGFzdEluZGV4SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdEluZGV4RGVwdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2hvdWxkVXBkYXRlIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJbmRleEpvYkRhdGEnXSA9IEthbHR1cmFJbmRleEpvYkRhdGE7Il19