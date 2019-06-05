/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobFilter } from './KalturaBatchJobFilter';
/**
 * @record
 */
export function KalturaBatchJobFilterExtArgs() { }
/** @type {?|undefined} */
KalturaBatchJobFilterExtArgs.prototype.jobTypeAndSubTypeIn;
var KalturaBatchJobFilterExt = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBatchJobFilterExt, _super);
    function KalturaBatchJobFilterExt(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBatchJobFilterExt.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBatchJobFilterExt' },
            jobTypeAndSubTypeIn: { type: 's' }
        });
        return result;
    };
    return KalturaBatchJobFilterExt;
}(KalturaBatchJobFilter));
export { KalturaBatchJobFilterExt };
if (false) {
    /** @type {?} */
    KalturaBatchJobFilterExt.prototype.jobTypeAndSubTypeIn;
}
typesMappingStorage['KalturaBatchJobFilterExt'] = KalturaBatchJobFilterExt;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhdGNoSm9iRmlsdGVyRXh0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQmF0Y2hKb2JGaWx0ZXJFeHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0FBTzNGLElBQUE7SUFBOEMsb0RBQXFCO0lBSS9ELGtDQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBN0JMO0VBUzhDLHFCQUFxQixFQXFCbEUsQ0FBQTtBQXJCRCxvQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JGaWx0ZXIsIEthbHR1cmFCYXRjaEpvYkZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYkZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhdGNoSm9iRmlsdGVyRXh0QXJncyAgZXh0ZW5kcyBLYWx0dXJhQmF0Y2hKb2JGaWx0ZXJBcmdzIHtcbiAgICBqb2JUeXBlQW5kU3ViVHlwZUluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhdGNoSm9iRmlsdGVyRXh0IGV4dGVuZHMgS2FsdHVyYUJhdGNoSm9iRmlsdGVyIHtcblxuICAgIGpvYlR5cGVBbmRTdWJUeXBlSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCYXRjaEpvYkZpbHRlckV4dEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmF0Y2hKb2JGaWx0ZXJFeHQnIH0sXG5cdFx0XHRcdGpvYlR5cGVBbmRTdWJUeXBlSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJhdGNoSm9iRmlsdGVyRXh0J10gPSBLYWx0dXJhQmF0Y2hKb2JGaWx0ZXJFeHQ7Il19