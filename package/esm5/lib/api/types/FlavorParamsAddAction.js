/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorParamsAddActionArgs() { }
/** @type {?} */
FlavorParamsAddActionArgs.prototype.flavorParams;
/**
 * Build request payload for service 'flavorParams' action 'add'.
 *
 * Usage: Add new Flavor Params
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorParams' action 'add'.
 *
 * Usage: Add new Flavor Params
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
FlavorParamsAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorParamsAddAction, _super);
    function FlavorParamsAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaFlavorParams', responseConstructor: KalturaFlavorParams }) || this;
    }
    /**
     * @return {?}
     */
    FlavorParamsAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorparams' },
            action: { type: 'c', default: 'add' },
            flavorParams: { type: 'o', subTypeConstructor: KalturaFlavorParams, subType: 'KalturaFlavorParams' }
        });
        return result;
    };
    return FlavorParamsAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorParams' action 'add'.
 *
 * Usage: Add new Flavor Params
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
export { FlavorParamsAddAction };
if (false) {
    /** @type {?} */
    FlavorParamsAddAction.prototype.flavorParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yUGFyYW1zQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GbGF2b3JQYXJhbXNBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBMkMsaURBQW1DO0lBSTFFLCtCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHFCQUFxQixFQUFFLG1CQUFtQixFQUFHLG1CQUFtQixFQUFHLENBQUM7S0FDMUg7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDOUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1NBQy9GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBdkNMO0VBa0IyQyxjQUFjLEVBc0J4RCxDQUFBOzs7Ozs7Ozs7QUF0QkQsaUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF2b3JQYXJhbXNBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmxhdm9yUGFyYW1zIDogS2FsdHVyYUZsYXZvclBhcmFtcztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2ZsYXZvclBhcmFtcycgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IEZsYXZvciBQYXJhbXNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRmxhdm9yUGFyYW1zXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBGbGF2b3JQYXJhbXNBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRmxhdm9yUGFyYW1zPiB7XG5cbiAgICBmbGF2b3JQYXJhbXMgOiBLYWx0dXJhRmxhdm9yUGFyYW1zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEZsYXZvclBhcmFtc0FkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclBhcmFtcycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yUGFyYW1zICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdmbGF2b3JwYXJhbXMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvclBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=