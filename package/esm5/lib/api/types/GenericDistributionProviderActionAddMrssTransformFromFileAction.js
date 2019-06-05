/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function GenericDistributionProviderActionAddMrssTransformFromFileActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionAddMrssTransformFromFileActionArgs.prototype.id;
/** @type {?} */
GenericDistributionProviderActionAddMrssTransformFromFileActionArgs.prototype.xslFile;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionAddMrssTransformFromFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionAddMrssTransformFromFileAction, _super);
    function GenericDistributionProviderActionAddMrssTransformFromFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionAddMrssTransformFromFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'addMrssTransformFromFile' },
            id: { type: 'n' },
            xslFile: { type: 'f' }
        });
        return result;
    };
    return GenericDistributionProviderActionAddMrssTransformFromFileAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionAddMrssTransformFromFileAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionAddMrssTransformFromFileAction.prototype.id;
    /** @type {?} */
    GenericDistributionProviderActionAddMrssTransformFromFileAction.prototype.xslFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkTXJzc1RyYW5zZm9ybUZyb21GaWxlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRNcnNzVHJhbnNmb3JtRnJvbUZpbGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RyxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTNGOzs7Ozs7OztBQUFBO0lBQXFGLDJGQUE4RDtJQUsvSSx5RUFBWSxJQUEwRTtlQUVsRixrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywwQ0FBMEMsRUFBRSxtQkFBbUIsRUFBRyx3Q0FBd0MsRUFBRyxDQUFDO0tBQ3BLOzs7O0lBRVMsc0ZBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdURBQXVELEVBQUU7WUFDdkcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0QsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswRUExQ0w7RUFtQnFGLG9CQUFvQixFQXdCeEcsQ0FBQTs7Ozs7Ozs7O0FBeEJELDJFQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJztcblxuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NUcmFuc2Zvcm1Gcm9tRmlsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0eHNsRmlsZSA6IEZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nIGFjdGlvbiAnYWRkTXJzc1RyYW5zZm9ybUZyb21GaWxlJy5cbiAqXG4gKiBVc2FnZTogQWRkIE1SU1MgdHJhbnNmb3JtIGZpbGUgdG8gZ2VuZXJpYyBkaXN0cmlidXRpb24gcHJvdmlkZXIgYWN0aW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkTXJzc1RyYW5zZm9ybUZyb21GaWxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbj4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHhzbEZpbGUgOiBGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NUcmFuc2Zvcm1Gcm9tRmlsZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2dlbmVyaWNkaXN0cmlidXRpb25wcm92aWRlcmFjdGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZE1yc3NUcmFuc2Zvcm1Gcm9tRmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0eHNsRmlsZSA6IHsgdHlwZSA6ICdmJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=