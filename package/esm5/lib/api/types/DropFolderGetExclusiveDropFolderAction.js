/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderGetExclusiveDropFolderActionArgs() { }
/** @type {?} */
DropFolderGetExclusiveDropFolderActionArgs.prototype.tag;
/** @type {?} */
DropFolderGetExclusiveDropFolderActionArgs.prototype.maxTime;
/**
 * Build request payload for service 'dropFolder' action 'getExclusiveDropFolder'.
 *
 * Usage: getExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'dropFolder' action 'getExclusiveDropFolder'.
 *
 * Usage: getExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
DropFolderGetExclusiveDropFolderAction = /** @class */ (function (_super) {
    tslib_1.__extends(DropFolderGetExclusiveDropFolderAction, _super);
    function DropFolderGetExclusiveDropFolderAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDropFolder', responseConstructor: KalturaDropFolder }) || this;
    }
    /**
     * @return {?}
     */
    DropFolderGetExclusiveDropFolderAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'dropfolder_dropfolder' },
            action: { type: 'c', default: 'getExclusiveDropFolder' },
            tag: { type: 's' },
            maxTime: { type: 'n' }
        });
        return result;
    };
    return DropFolderGetExclusiveDropFolderAction;
}(KalturaRequest));
/**
 * Build request payload for service 'dropFolder' action 'getExclusiveDropFolder'.
 *
 * Usage: getExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export { DropFolderGetExclusiveDropFolderAction };
if (false) {
    /** @type {?} */
    DropFolderGetExclusiveDropFolderAction.prototype.tag;
    /** @type {?} */
    DropFolderGetExclusiveDropFolderAction.prototype.maxTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckdldEV4Y2x1c2l2ZURyb3BGb2xkZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Ryb3BGb2xkZXJHZXRFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBNEQsa0VBQWlDO0lBS3pGLGdEQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRCxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lEQTFDTDtFQW1CNEQsY0FBYyxFQXdCekUsQ0FBQTs7Ozs7Ozs7O0FBeEJELGtEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlciB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wRm9sZGVyR2V0RXhjbHVzaXZlRHJvcEZvbGRlckFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB0YWcgOiBzdHJpbmc7XG5cdG1heFRpbWUgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkcm9wRm9sZGVyJyBhY3Rpb24gJ2dldEV4Y2x1c2l2ZURyb3BGb2xkZXInLlxuICpcbiAqIFVzYWdlOiBnZXRFeGNsdXNpdmUgS2FsdHVyYURyb3BGb2xkZXIgb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURyb3BGb2xkZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BGb2xkZXJHZXRFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURyb3BGb2xkZXI+IHtcblxuICAgIHRhZyA6IHN0cmluZztcblx0bWF4VGltZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEcm9wRm9sZGVyR2V0RXhjbHVzaXZlRHJvcEZvbGRlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Ryb3Bmb2xkZXJfZHJvcGZvbGRlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEV4Y2x1c2l2ZURyb3BGb2xkZXInIH0sXG5cdFx0XHRcdHRhZyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYXhUaW1lIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==