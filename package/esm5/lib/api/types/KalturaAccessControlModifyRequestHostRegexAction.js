/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlModifyRequestHostRegexActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlModifyRequestHostRegexActionArgs.prototype.pattern;
/** @type {?|undefined} */
KalturaAccessControlModifyRequestHostRegexActionArgs.prototype.replacement;
/** @type {?|undefined} */
KalturaAccessControlModifyRequestHostRegexActionArgs.prototype.replacmenServerNodeId;
var KalturaAccessControlModifyRequestHostRegexAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlModifyRequestHostRegexAction, _super);
    function KalturaAccessControlModifyRequestHostRegexAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlModifyRequestHostRegexAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlModifyRequestHostRegexAction' },
            pattern: { type: 's' },
            replacement: { type: 's' },
            replacmenServerNodeId: { type: 'n' }
        });
        return result;
    };
    return KalturaAccessControlModifyRequestHostRegexAction;
}(KalturaRuleAction));
export { KalturaAccessControlModifyRequestHostRegexAction };
if (false) {
    /** @type {?} */
    KalturaAccessControlModifyRequestHostRegexAction.prototype.pattern;
    /** @type {?} */
    KalturaAccessControlModifyRequestHostRegexAction.prototype.replacement;
    /** @type {?} */
    KalturaAccessControlModifyRequestHostRegexAction.prototype.replacmenServerNodeId;
}
typesMappingStorage['KalturaAccessControlModifyRequestHostRegexAction'] = KalturaAccessControlModifyRequestHostRegexAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xNb2RpZnlSZXF1ZXN0SG9zdFJlZ2V4QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWNjZXNzQ29udHJvbE1vZGlmeVJlcXVlc3RIb3N0UmVnZXhBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztBQVMvRSxJQUFBO0lBQXNFLDRFQUFpQjtJQU1uRiwwREFBWSxJQUE0RDtlQUVwRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtEQUFrRCxFQUFFO1lBQ3JHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyREFuQ0w7RUFXc0UsaUJBQWlCLEVBeUJ0RixDQUFBO0FBekJELDREQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0RBQWtELENBQUMsR0FBRyxnREFBZ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUnVsZUFjdGlvbiwgS2FsdHVyYVJ1bGVBY3Rpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhUnVsZUFjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFjY2Vzc0NvbnRyb2xNb2RpZnlSZXF1ZXN0SG9zdFJlZ2V4QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbkFyZ3Mge1xuICAgIHBhdHRlcm4/IDogc3RyaW5nO1xuXHRyZXBsYWNlbWVudD8gOiBzdHJpbmc7XG5cdHJlcGxhY21lblNlcnZlck5vZGVJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBY2Nlc3NDb250cm9sTW9kaWZ5UmVxdWVzdEhvc3RSZWdleEFjdGlvbiBleHRlbmRzIEthbHR1cmFSdWxlQWN0aW9uIHtcblxuICAgIHBhdHRlcm4gOiBzdHJpbmc7XG5cdHJlcGxhY2VtZW50IDogc3RyaW5nO1xuXHRyZXBsYWNtZW5TZXJ2ZXJOb2RlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBY2Nlc3NDb250cm9sTW9kaWZ5UmVxdWVzdEhvc3RSZWdleEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbE1vZGlmeVJlcXVlc3RIb3N0UmVnZXhBY3Rpb24nIH0sXG5cdFx0XHRcdHBhdHRlcm4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVwbGFjZW1lbnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVwbGFjbWVuU2VydmVyTm9kZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sTW9kaWZ5UmVxdWVzdEhvc3RSZWdleEFjdGlvbiddID0gS2FsdHVyYUFjY2Vzc0NvbnRyb2xNb2RpZnlSZXF1ZXN0SG9zdFJlZ2V4QWN0aW9uOyJdfQ==