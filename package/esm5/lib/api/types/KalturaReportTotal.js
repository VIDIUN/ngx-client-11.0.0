/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaReportTotalArgs() { }
/** @type {?|undefined} */
KalturaReportTotalArgs.prototype.header;
/** @type {?|undefined} */
KalturaReportTotalArgs.prototype.data;
var KalturaReportTotal = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaReportTotal, _super);
    function KalturaReportTotal(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaReportTotal.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaReportTotal' },
            header: { type: 's' },
            data: { type: 's' }
        });
        return result;
    };
    return KalturaReportTotal;
}(KalturaObjectBase));
export { KalturaReportTotal };
if (false) {
    /** @type {?} */
    KalturaReportTotal.prototype.header;
    /** @type {?} */
    KalturaReportTotal.prototype.data;
}
typesMappingStorage['KalturaReportTotal'] = KalturaReportTotal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlcG9ydFRvdGFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVwb3J0VG90YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsSUFBQTtJQUF3Qyw4Q0FBaUI7SUFLckQsNEJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZCQWhDTDtFQVV3QyxpQkFBaUIsRUF1QnhELENBQUE7QUF2QkQsOEJBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlcG9ydFRvdGFsQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGhlYWRlcj8gOiBzdHJpbmc7XG5cdGRhdGE/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVwb3J0VG90YWwgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBoZWFkZXIgOiBzdHJpbmc7XG5cdGRhdGEgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZXBvcnRUb3RhbEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVwb3J0VG90YWwnIH0sXG5cdFx0XHRcdGhlYWRlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZXBvcnRUb3RhbCddID0gS2FsdHVyYVJlcG9ydFRvdGFsOyJdfQ==