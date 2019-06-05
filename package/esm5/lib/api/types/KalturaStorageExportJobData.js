/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageJobData } from './KalturaStorageJobData';
/**
 * @record
 */
export function KalturaStorageExportJobDataArgs() { }
/** @type {?|undefined} */
KalturaStorageExportJobDataArgs.prototype.force;
/** @type {?|undefined} */
KalturaStorageExportJobDataArgs.prototype.createLink;
var KalturaStorageExportJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStorageExportJobData, _super);
    function KalturaStorageExportJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStorageExportJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaStorageExportJobData' },
            force: { type: 'b' },
            createLink: { type: 'b' }
        });
        return result;
    };
    return KalturaStorageExportJobData;
}(KalturaStorageJobData));
export { KalturaStorageExportJobData };
if (false) {
    /** @type {?} */
    KalturaStorageExportJobData.prototype.force;
    /** @type {?} */
    KalturaStorageExportJobData.prototype.createLink;
}
typesMappingStorage['KalturaStorageExportJobData'] = KalturaStorageExportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7QUFRM0YsSUFBQTtJQUFpRCx1REFBcUI7SUFLbEUscUNBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0FoQ0w7RUFVaUQscUJBQXFCLEVBdUJyRSxDQUFBO0FBdkJELHVDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0b3JhZ2VKb2JEYXRhLCBLYWx0dXJhU3RvcmFnZUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3RvcmFnZUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVN0b3JhZ2VKb2JEYXRhQXJncyB7XG4gICAgZm9yY2U/IDogYm9vbGVhbjtcblx0Y3JlYXRlTGluaz8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZUpvYkRhdGEge1xuXG4gICAgZm9yY2UgOiBib29sZWFuO1xuXHRjcmVhdGVMaW5rIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YScgfSxcblx0XHRcdFx0Zm9yY2UgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0Y3JlYXRlTGluayA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGEnXSA9IEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YTsiXX0=