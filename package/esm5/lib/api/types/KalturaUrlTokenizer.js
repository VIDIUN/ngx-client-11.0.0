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
export function KalturaUrlTokenizerArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerArgs.prototype.window;
/** @type {?|undefined} */
KalturaUrlTokenizerArgs.prototype.key;
/** @type {?|undefined} */
KalturaUrlTokenizerArgs.prototype.limitIpAddress;
var KalturaUrlTokenizer = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUrlTokenizer, _super);
    function KalturaUrlTokenizer(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUrlTokenizer.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUrlTokenizer' },
            window: { type: 'n' },
            key: { type: 's' },
            limitIpAddress: { type: 'b' }
        });
        return result;
    };
    return KalturaUrlTokenizer;
}(KalturaObjectBase));
export { KalturaUrlTokenizer };
if (false) {
    /** @type {?} */
    KalturaUrlTokenizer.prototype.window;
    /** @type {?} */
    KalturaUrlTokenizer.prototype.key;
    /** @type {?} */
    KalturaUrlTokenizer.prototype.limitIpAddress;
}
typesMappingStorage['KalturaUrlTokenizer'] = KalturaUrlTokenizer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVybFRva2VuaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLElBQUE7SUFBeUMsK0NBQWlCO0lBTXRELDZCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkFuQ0w7RUFXeUMsaUJBQWlCLEVBeUJ6RCxDQUFBO0FBekJELCtCQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVybFRva2VuaXplckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB3aW5kb3c/IDogbnVtYmVyO1xuXHRrZXk/IDogc3RyaW5nO1xuXHRsaW1pdElwQWRkcmVzcz8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXJsVG9rZW5pemVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgd2luZG93IDogbnVtYmVyO1xuXHRrZXkgOiBzdHJpbmc7XG5cdGxpbWl0SXBBZGRyZXNzIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVybFRva2VuaXplckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXJsVG9rZW5pemVyJyB9LFxuXHRcdFx0XHR3aW5kb3cgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0a2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxpbWl0SXBBZGRyZXNzIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVcmxUb2tlbml6ZXInXSA9IEthbHR1cmFVcmxUb2tlbml6ZXI7Il19