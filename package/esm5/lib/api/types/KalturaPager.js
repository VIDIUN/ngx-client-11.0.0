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
export function KalturaPagerArgs() { }
/** @type {?|undefined} */
KalturaPagerArgs.prototype.pageSize;
/** @type {?|undefined} */
KalturaPagerArgs.prototype.pageIndex;
var KalturaPager = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPager, _super);
    function KalturaPager(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPager.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPager' },
            pageSize: { type: 'n' },
            pageIndex: { type: 'n' }
        });
        return result;
    };
    return KalturaPager;
}(KalturaObjectBase));
export { KalturaPager };
if (false) {
    /** @type {?} */
    KalturaPager.prototype.pageSize;
    /** @type {?} */
    KalturaPager.prototype.pageIndex;
}
typesMappingStorage['KalturaPager'] = KalturaPager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsSUFBQTtJQUFrQyx3Q0FBaUI7SUFLL0Msc0JBQVksSUFBd0I7ZUFFaEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakUsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUJBaENMO0VBVWtDLGlCQUFpQixFQXVCbEQsQ0FBQTtBQXZCRCx3QkF1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQYWdlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwYWdlU2l6ZT8gOiBudW1iZXI7XG5cdHBhZ2VJbmRleD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQYWdlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHBhZ2VTaXplIDogbnVtYmVyO1xuXHRwYWdlSW5kZXggOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQYWdlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGFnZXInIH0sXG5cdFx0XHRcdHBhZ2VTaXplIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhZ2VJbmRleCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGFnZXInXSA9IEthbHR1cmFQYWdlcjsiXX0=