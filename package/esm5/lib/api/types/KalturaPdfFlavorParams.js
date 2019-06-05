/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
/**
 * @record
 */
export function KalturaPdfFlavorParamsArgs() { }
/** @type {?|undefined} */
KalturaPdfFlavorParamsArgs.prototype.readonly;
var KalturaPdfFlavorParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPdfFlavorParams, _super);
    function KalturaPdfFlavorParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPdfFlavorParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPdfFlavorParams' },
            readonly: { type: 'b' }
        });
        return result;
    };
    return KalturaPdfFlavorParams;
}(KalturaFlavorParams));
export { KalturaPdfFlavorParams };
if (false) {
    /** @type {?} */
    KalturaPdfFlavorParams.prototype.readonly;
}
typesMappingStorage['KalturaPdfFlavorParams'] = KalturaPdfFlavorParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBkZkZsYXZvclBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBkZkZsYXZvclBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFPckYsSUFBQTtJQUE0QyxrREFBbUI7SUFJM0QsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBN0JMO0VBUzRDLG1CQUFtQixFQXFCOUQsQ0FBQTtBQXJCRCxrQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zLCBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBkZkZsYXZvclBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtc0FyZ3Mge1xuICAgIHJlYWRvbmx5PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQZGZGbGF2b3JQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zIHtcblxuICAgIHJlYWRvbmx5IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBkZkZsYXZvclBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGRmRmxhdm9yUGFyYW1zJyB9LFxuXHRcdFx0XHRyZWFkb25seSA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGRmRmxhdm9yUGFyYW1zJ10gPSBLYWx0dXJhUGRmRmxhdm9yUGFyYW1zOyJdfQ==