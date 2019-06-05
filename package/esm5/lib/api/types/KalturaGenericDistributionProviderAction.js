/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaGenericDistributionProviderParser } from './KalturaGenericDistributionProviderParser';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaGenericDistributionProviderActionArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.genericDistributionProviderId;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.action;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.resultsParser;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.serverAddress;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.remotePath;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.remoteUsername;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.remotePassword;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.editableFields;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionArgs.prototype.mandatoryFields;
var KalturaGenericDistributionProviderAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDistributionProviderAction, _super);
    function KalturaGenericDistributionProviderAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDistributionProviderAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProviderAction' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            genericDistributionProviderId: { type: 'n' },
            action: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaGenericDistributionProviderStatus, subType: 'KalturaGenericDistributionProviderStatus' },
            resultsParser: { type: 'en', subTypeConstructor: KalturaGenericDistributionProviderParser, subType: 'KalturaGenericDistributionProviderParser' },
            protocol: { type: 'en', subTypeConstructor: KalturaDistributionProtocol, subType: 'KalturaDistributionProtocol' },
            serverAddress: { type: 's' },
            remotePath: { type: 's' },
            remoteUsername: { type: 's' },
            remotePassword: { type: 's' },
            editableFields: { type: 's' },
            mandatoryFields: { type: 's' },
            mrssTransformer: { type: 's', readOnly: true },
            mrssValidator: { type: 's', readOnly: true },
            resultsTransformer: { type: 's', readOnly: true }
        });
        return result;
    };
    return KalturaGenericDistributionProviderAction;
}(KalturaObjectBase));
export { KalturaGenericDistributionProviderAction };
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.id;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.createdAt;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.updatedAt;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.genericDistributionProviderId;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.action;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.status;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.resultsParser;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.protocol;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.serverAddress;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.remotePath;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.remoteUsername;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.remotePassword;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.editableFields;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.mandatoryFields;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.mrssTransformer;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.mrssValidator;
    /** @type {?} */
    KalturaGenericDistributionProviderAction.prototype.resultsTransformer;
}
typesMappingStorage['KalturaGenericDistributionProviderAction'] = KalturaGenericDistributionProviderAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmxGLElBQUE7SUFBOEQsb0VBQWlCO0lBb0IzRSxrREFBWSxJQUFvRDtlQUU1RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLCtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQzdGLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMvRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0NBQXdDLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQzlKLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0NBQXdDLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQ3BKLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3JILGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDL0Msa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDM0MsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttREExRUw7RUFzQjhELGlCQUFpQixFQXFEOUUsQ0FBQTtBQXJERCxvREFxREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQ0FBMEMsQ0FBQyxHQUFHLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb24gfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25BY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyUGFyc2VyIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyUGFyc2VyJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcklkPyA6IG51bWJlcjtcblx0YWN0aW9uPyA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb247XG5cdHJlc3VsdHNQYXJzZXI/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclBhcnNlcjtcblx0cHJvdG9jb2w/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sO1xuXHRzZXJ2ZXJBZGRyZXNzPyA6IHN0cmluZztcblx0cmVtb3RlUGF0aD8gOiBzdHJpbmc7XG5cdHJlbW90ZVVzZXJuYW1lPyA6IHN0cmluZztcblx0cmVtb3RlUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRlZGl0YWJsZUZpZWxkcz8gOiBzdHJpbmc7XG5cdG1hbmRhdG9yeUZpZWxkcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0Z2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVySWQgOiBudW1iZXI7XG5cdGFjdGlvbiA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb247XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXM7XG5cdHJlc3VsdHNQYXJzZXIgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyUGFyc2VyO1xuXHRwcm90b2NvbCA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0c2VydmVyQWRkcmVzcyA6IHN0cmluZztcblx0cmVtb3RlUGF0aCA6IHN0cmluZztcblx0cmVtb3RlVXNlcm5hbWUgOiBzdHJpbmc7XG5cdHJlbW90ZVBhc3N3b3JkIDogc3RyaW5nO1xuXHRlZGl0YWJsZUZpZWxkcyA6IHN0cmluZztcblx0bWFuZGF0b3J5RmllbGRzIDogc3RyaW5nO1xuXHRyZWFkb25seSBtcnNzVHJhbnNmb3JtZXIgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IG1yc3NWYWxpZGF0b3IgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHJlc3VsdHNUcmFuc2Zvcm1lciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbicgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMnIH0sXG5cdFx0XHRcdHJlc3VsdHNQYXJzZXIgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyUGFyc2VyLCBzdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJQYXJzZXInIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCcgfSxcblx0XHRcdFx0c2VydmVyQWRkcmVzcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZVVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbW90ZVBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVkaXRhYmxlRmllbGRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1hbmRhdG9yeUZpZWxkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtcnNzVHJhbnNmb3JtZXIgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRtcnNzVmFsaWRhdG9yIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVzdWx0c1RyYW5zZm9ybWVyIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiddID0gS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbjsiXX0=