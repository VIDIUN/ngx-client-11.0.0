/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorParamsOutputGetActionArgs() { }
/** @type {?} */
FlavorParamsOutputGetActionArgs.prototype.id;
/**
 * Build request payload for service 'flavorParamsOutput' action 'get'.
 *
 * Usage: Get flavor params output object by ID
 *
 * Server response type:         KalturaFlavorParamsOutput
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorParamsOutput' action 'get'.
 *
 * Usage: Get flavor params output object by ID
 *
 * Server response type:         KalturaFlavorParamsOutput
 * Server failure response type: KalturaAPIException
 */
FlavorParamsOutputGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorParamsOutputGetAction, _super);
    function FlavorParamsOutputGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaFlavorParamsOutput', responseConstructor: KalturaFlavorParamsOutput }) || this;
    }
    /**
     * @return {?}
     */
    FlavorParamsOutputGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorparamsoutput' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return FlavorParamsOutputGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorParamsOutput' action 'get'.
 *
 * Usage: Get flavor params output object by ID
 *
 * Server response type:         KalturaFlavorParamsOutput
 * Server failure response type: KalturaAPIException
 */
export { FlavorParamsOutputGetAction };
if (false) {
    /** @type {?} */
    FlavorParamsOutputGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yUGFyYW1zT3V0cHV0R2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GbGF2b3JQYXJhbXNPdXRwdXRHZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBaUQsdURBQXlDO0lBSXRGLHFDQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDJCQUEyQixFQUFFLG1CQUFtQixFQUFHLHlCQUF5QixFQUFHLENBQUM7S0FDdEk7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNwRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNWLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBdkNMO0VBa0JpRCxjQUFjLEVBc0I5RCxDQUFBOzs7Ozs7Ozs7QUF0QkQsdUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF2b3JQYXJhbXNPdXRwdXRHZXRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdmbGF2b3JQYXJhbXNPdXRwdXQnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogR2V0IGZsYXZvciBwYXJhbXMgb3V0cHV0IG9iamVjdCBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXZvclBhcmFtc091dHB1dEdldEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQ+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEZsYXZvclBhcmFtc091dHB1dEdldEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdmbGF2b3JwYXJhbXNvdXRwdXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==