/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlayReadyDrmGetContentKeysActionArgs() { }
/** @type {?} */
PlayReadyDrmGetContentKeysActionArgs.prototype.keyIds;
/**
 * Build request payload for service 'playReadyDrm' action 'getContentKeys'.
 *
 * Usage: Get content keys for input key ids
 *
 * Server response type:         KalturaPlayReadyContentKey[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playReadyDrm' action 'getContentKeys'.
 *
 * Usage: Get content keys for input key ids
 *
 * Server response type:         KalturaPlayReadyContentKey[]
 * Server failure response type: KalturaAPIException
 */
PlayReadyDrmGetContentKeysAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlayReadyDrmGetContentKeysAction, _super);
    function PlayReadyDrmGetContentKeysAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaPlayReadyContentKey', responseConstructor: KalturaPlayReadyContentKey }) || this;
    }
    /**
     * @return {?}
     */
    PlayReadyDrmGetContentKeysAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playready_playreadydrm' },
            action: { type: 'c', default: 'getContentKeys' },
            keyIds: { type: 's' }
        });
        return result;
    };
    return PlayReadyDrmGetContentKeysAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playReadyDrm' action 'getContentKeys'.
 *
 * Usage: Get content keys for input key ids
 *
 * Server response type:         KalturaPlayReadyContentKey[]
 * Server failure response type: KalturaAPIException
 */
export { PlayReadyDrmGetContentKeysAction };
if (false) {
    /** @type {?} */
    PlayReadyDrmGetContentKeysAction.prototype.keyIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheVJlYWR5RHJtR2V0Q29udGVudEtleXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlSZWFkeURybUdldENvbnRlbnRLZXlzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXNELDREQUE0QztJQUk5RiwwQ0FBWSxJQUEyQztlQUVuRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBRywwQkFBMEIsRUFBRyxDQUFDO0tBQ3hJOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0JBQWdCLEVBQUU7WUFDbkQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBdkNMO0VBa0JzRCxjQUFjLEVBc0JuRSxDQUFBOzs7Ozs7Ozs7QUF0QkQsNENBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5UmVhZHlDb250ZW50S2V5IH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5Q29udGVudEtleSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlSZWFkeURybUdldENvbnRlbnRLZXlzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGtleUlkcyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BsYXlSZWFkeURybScgYWN0aW9uICdnZXRDb250ZW50S2V5cycuXG4gKlxuICogVXNhZ2U6IEdldCBjb250ZW50IGtleXMgZm9yIGlucHV0IGtleSBpZHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUGxheVJlYWR5Q29udGVudEtleVtdXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5UmVhZHlEcm1HZXRDb250ZW50S2V5c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQbGF5UmVhZHlDb250ZW50S2V5W10+IHtcblxuICAgIGtleUlkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQbGF5UmVhZHlEcm1HZXRDb250ZW50S2V5c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2EnLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BsYXlyZWFkeV9wbGF5cmVhZHlkcm0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRDb250ZW50S2V5cycgfSxcblx0XHRcdFx0a2V5SWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==