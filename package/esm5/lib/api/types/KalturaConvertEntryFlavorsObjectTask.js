/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaConvertEntryFlavorsObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaConvertEntryFlavorsObjectTaskArgs.prototype.flavorParamsIds;
/** @type {?|undefined} */
KalturaConvertEntryFlavorsObjectTaskArgs.prototype.reconvert;
var KalturaConvertEntryFlavorsObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConvertEntryFlavorsObjectTask, _super);
    function KalturaConvertEntryFlavorsObjectTask(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConvertEntryFlavorsObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvertEntryFlavorsObjectTask' },
            flavorParamsIds: { type: 's' },
            reconvert: { type: 'b' }
        });
        return result;
    };
    return KalturaConvertEntryFlavorsObjectTask;
}(KalturaObjectTask));
export { KalturaConvertEntryFlavorsObjectTask };
if (false) {
    /** @type {?} */
    KalturaConvertEntryFlavorsObjectTask.prototype.flavorParamsIds;
    /** @type {?} */
    KalturaConvertEntryFlavorsObjectTask.prototype.reconvert;
}
typesMappingStorage['KalturaConvertEntryFlavorsObjectTask'] = KalturaConvertEntryFlavorsObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRFbnRyeUZsYXZvcnNPYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udmVydEVudHJ5Rmxhdm9yc09iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsSUFBQTtJQUEwRCxnRUFBaUI7SUFLdkUsOENBQVksSUFBZ0Q7ZUFFeEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQ0FoQ0w7RUFVMEQsaUJBQWlCLEVBdUIxRSxDQUFBO0FBdkJELGdEQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdFRhc2ssIEthbHR1cmFPYmplY3RUYXNrQXJncyB9IGZyb20gJy4vS2FsdHVyYU9iamVjdFRhc2snO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb252ZXJ0RW50cnlGbGF2b3JzT2JqZWN0VGFza0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2tBcmdzIHtcbiAgICBmbGF2b3JQYXJhbXNJZHM/IDogc3RyaW5nO1xuXHRyZWNvbnZlcnQ/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnRFbnRyeUZsYXZvcnNPYmplY3RUYXNrIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2sge1xuXG4gICAgZmxhdm9yUGFyYW1zSWRzIDogc3RyaW5nO1xuXHRyZWNvbnZlcnQgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29udmVydEVudHJ5Rmxhdm9yc09iamVjdFRhc2tBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnZlcnRFbnRyeUZsYXZvcnNPYmplY3RUYXNrJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVjb252ZXJ0IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb252ZXJ0RW50cnlGbGF2b3JzT2JqZWN0VGFzayddID0gS2FsdHVyYUNvbnZlcnRFbnRyeUZsYXZvcnNPYmplY3RUYXNrOyJdfQ==