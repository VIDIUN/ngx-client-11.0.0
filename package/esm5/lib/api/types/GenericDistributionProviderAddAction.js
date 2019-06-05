/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function GenericDistributionProviderAddActionArgs() { }
/** @type {?} */
GenericDistributionProviderAddActionArgs.prototype.genericDistributionProvider;
/**
 * Build request payload for service 'genericDistributionProvider' action 'add'.
 *
 * Usage: Add new Generic Distribution Provider
 *
 * Server response type:         KalturaGenericDistributionProvider
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProvider' action 'add'.
 *
 * Usage: Add new Generic Distribution Provider
 *
 * Server response type:         KalturaGenericDistributionProvider
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderAddAction, _super);
    function GenericDistributionProviderAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProvider', responseConstructor: KalturaGenericDistributionProvider }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovider' },
            action: { type: 'c', default: 'add' },
            genericDistributionProvider: { type: 'o', subTypeConstructor: KalturaGenericDistributionProvider, subType: 'KalturaGenericDistributionProvider' }
        });
        return result;
    };
    return GenericDistributionProviderAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'genericDistributionProvider' action 'add'.
 *
 * Usage: Add new Generic Distribution Provider
 *
 * Server response type:         KalturaGenericDistributionProvider
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderAddAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderAddAction.prototype.genericDistributionProvider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUxRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBMEQsZ0VBQWtEO0lBSXhHLDhDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9DQUFvQyxFQUFFLG1CQUFtQixFQUFHLGtDQUFrQyxFQUFHLENBQUM7S0FDeEo7Ozs7SUFFUywyREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpREFBaUQsRUFBRTtZQUNqRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtTQUM1SSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytDQXZDTDtFQWtCMEQsY0FBYyxFQXNCdkUsQ0FBQTs7Ozs7Ozs7O0FBdEJELGdEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXInIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBHZW5lcmljIERpc3RyaWJ1dGlvbiBQcm92aWRlclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXI+IHtcblxuICAgIGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnRlbnRkaXN0cmlidXRpb25fZ2VuZXJpY2Rpc3RyaWJ1dGlvbnByb3ZpZGVyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19