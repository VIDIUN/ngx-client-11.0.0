/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DrmPolicyGetActionArgs() { }
/** @type {?} */
DrmPolicyGetActionArgs.prototype.drmPolicyId;
/**
 * Build request payload for service 'drmPolicy' action 'get'.
 *
 * Usage: Retrieve a KalturaDrmPolicy object by ID
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'drmPolicy' action 'get'.
 *
 * Usage: Retrieve a KalturaDrmPolicy object by ID
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
DrmPolicyGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(DrmPolicyGetAction, _super);
    function DrmPolicyGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDrmPolicy', responseConstructor: KalturaDrmPolicy }) || this;
    }
    /**
     * @return {?}
     */
    DrmPolicyGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'drm_drmpolicy' },
            action: { type: 'c', default: 'get' },
            drmPolicyId: { type: 'n' }
        });
        return result;
    };
    return DrmPolicyGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'drmPolicy' action 'get'.
 *
 * Usage: Retrieve a KalturaDrmPolicy object by ID
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
export { DrmPolicyGetAction };
if (false) {
    /** @type {?} */
    DrmPolicyGetAction.prototype.drmPolicyId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJtUG9saWN5R2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Ecm1Qb2xpY3lHZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQWdDO0lBSXBFLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUM7S0FDcEg7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDL0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2QkF2Q0w7RUFrQndDLGNBQWMsRUFzQnJELENBQUE7Ozs7Ozs7OztBQXRCRCw4QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVBvbGljeSB9IGZyb20gJy4vS2FsdHVyYURybVBvbGljeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERybVBvbGljeUdldEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBkcm1Qb2xpY3lJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RybVBvbGljeScgYWN0aW9uICdnZXQnLlxuICpcbiAqIFVzYWdlOiBSZXRyaWV2ZSBhIEthbHR1cmFEcm1Qb2xpY3kgb2JqZWN0IGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURybVBvbGljeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRHJtUG9saWN5R2V0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURybVBvbGljeT4ge1xuXG4gICAgZHJtUG9saWN5SWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRHJtUG9saWN5R2V0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRHJtUG9saWN5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qb2xpY3kgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RybV9kcm1wb2xpY3knIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXQnIH0sXG5cdFx0XHRcdGRybVBvbGljeUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==