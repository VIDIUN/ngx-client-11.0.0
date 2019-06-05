/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaBulkUploadBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.uploadedOnGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.uploadedOnLessThanOrEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.uploadedOnEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.bulkUploadObjectTypeEqual;
/** @type {?|undefined} */
KalturaBulkUploadBaseFilterArgs.prototype.bulkUploadObjectTypeIn;
var KalturaBulkUploadBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadBaseFilter, _super);
    function KalturaBulkUploadBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadBaseFilter' },
            uploadedOnGreaterThanOrEqual: { type: 'd' },
            uploadedOnLessThanOrEqual: { type: 'd' },
            uploadedOnEqual: { type: 'd' },
            statusIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaBatchJobStatus, subType: 'KalturaBatchJobStatus' },
            bulkUploadObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaBulkUploadObjectType, subType: 'KalturaBulkUploadObjectType' },
            bulkUploadObjectTypeIn: { type: 's' }
        });
        return result;
    };
    return KalturaBulkUploadBaseFilter;
}(KalturaFilter));
export { KalturaBulkUploadBaseFilter };
if (false) {
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.uploadedOnGreaterThanOrEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.uploadedOnLessThanOrEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.uploadedOnEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.bulkUploadObjectTypeEqual;
    /** @type {?} */
    KalturaBulkUploadBaseFilter.prototype.bulkUploadObjectTypeIn;
}
typesMappingStorage['KalturaBulkUploadBaseFilter'] = KalturaBulkUploadBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFuRSxJQUFBO0lBQWlELHVEQUFhO0lBVTFELHFDQUFZLElBQXVDO2VBRS9DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDNUcseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUN0SSxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0FqREw7RUFpQmlELGFBQWEsRUFpQzdELENBQUE7QUFqQ0QsdUNBaUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIHVwbG9hZGVkT25HcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBsb2FkZWRPbkxlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGxvYWRlZE9uRXF1YWw/IDogRGF0ZTtcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXM7XG5cdGJ1bGtVcGxvYWRPYmplY3RUeXBlRXF1YWw/IDogS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlO1xuXHRidWxrVXBsb2FkT2JqZWN0VHlwZUluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICB1cGxvYWRlZE9uR3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBsb2FkZWRPbkxlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwbG9hZGVkT25FcXVhbCA6IERhdGU7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFCYXRjaEpvYlN0YXR1cztcblx0YnVsa1VwbG9hZE9iamVjdFR5cGVFcXVhbCA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZTtcblx0YnVsa1VwbG9hZE9iamVjdFR5cGVJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0dXBsb2FkZWRPbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGxvYWRlZE9uTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwbG9hZGVkT25FcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYlN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JTdGF0dXMnIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWRPYmplY3RUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkT2JqZWN0VHlwZUluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkQmFzZUZpbHRlciddID0gS2FsdHVyYUJ1bGtVcGxvYWRCYXNlRmlsdGVyOyJdfQ==