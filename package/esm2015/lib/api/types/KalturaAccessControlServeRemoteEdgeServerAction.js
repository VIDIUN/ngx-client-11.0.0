/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlServeRemoteEdgeServerActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlServeRemoteEdgeServerActionArgs.prototype.edgeServerIds;
export class KalturaAccessControlServeRemoteEdgeServerAction extends KalturaRuleAction {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlServeRemoteEdgeServerAction' },
            edgeServerIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAccessControlServeRemoteEdgeServerAction.prototype.edgeServerIds;
}
typesMappingStorage['KalturaAccessControlServeRemoteEdgeServerAction'] = KalturaAccessControlServeRemoteEdgeServerAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xTZXJ2ZVJlbW90ZUVkZ2VTZXJ2ZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sU2VydmVSZW1vdGVFZGdlU2VydmVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBTy9FLE1BQU0sc0RBQXVELFNBQVEsaUJBQWlCOzs7O0lBSWxGLFlBQVksSUFBMkQ7UUFFbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1lBQ3BHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLGlEQUFpRCxDQUFDLEdBQUcsK0NBQStDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGVBY3Rpb24sIEthbHR1cmFSdWxlQWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVJ1bGVBY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sU2VydmVSZW1vdGVFZGdlU2VydmVyQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbkFyZ3Mge1xuICAgIGVkZ2VTZXJ2ZXJJZHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQWNjZXNzQ29udHJvbFNlcnZlUmVtb3RlRWRnZVNlcnZlckFjdGlvbiBleHRlbmRzIEthbHR1cmFSdWxlQWN0aW9uIHtcblxuICAgIGVkZ2VTZXJ2ZXJJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBY2Nlc3NDb250cm9sU2VydmVSZW1vdGVFZGdlU2VydmVyQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBY2Nlc3NDb250cm9sU2VydmVSZW1vdGVFZGdlU2VydmVyQWN0aW9uJyB9LFxuXHRcdFx0XHRlZGdlU2VydmVySWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sU2VydmVSZW1vdGVFZGdlU2VydmVyQWN0aW9uJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbFNlcnZlUmVtb3RlRWRnZVNlcnZlckFjdGlvbjsiXX0=