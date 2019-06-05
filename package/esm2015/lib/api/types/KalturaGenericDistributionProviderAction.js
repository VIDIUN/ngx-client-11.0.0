/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaGenericDistributionProviderAction extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbEYsTUFBTSwrQ0FBZ0QsU0FBUSxpQkFBaUI7Ozs7SUFvQjNFLFlBQVksSUFBb0Q7UUFFNUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQzdGLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMvRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0NBQXdDLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQzlKLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0NBQXdDLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQ3BKLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3JILGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDL0Msa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDM0MsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMENBQTBDLENBQUMsR0FBRyx3Q0FBd0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclBhcnNlciB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclBhcnNlcic7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJJZD8gOiBudW1iZXI7XG5cdGFjdGlvbj8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xuXHRyZXN1bHRzUGFyc2VyPyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJQYXJzZXI7XG5cdHByb3RvY29sPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0c2VydmVyQWRkcmVzcz8gOiBzdHJpbmc7XG5cdHJlbW90ZVBhdGg/IDogc3RyaW5nO1xuXHRyZW1vdGVVc2VybmFtZT8gOiBzdHJpbmc7XG5cdHJlbW90ZVBhc3N3b3JkPyA6IHN0cmluZztcblx0ZWRpdGFibGVGaWVsZHM/IDogc3RyaW5nO1xuXHRtYW5kYXRvcnlGaWVsZHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcklkIDogbnVtYmVyO1xuXHRhY3Rpb24gOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzO1xuXHRyZXN1bHRzUGFyc2VyIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclBhcnNlcjtcblx0cHJvdG9jb2wgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2w7XG5cdHNlcnZlckFkZHJlc3MgOiBzdHJpbmc7XG5cdHJlbW90ZVBhdGggOiBzdHJpbmc7XG5cdHJlbW90ZVVzZXJuYW1lIDogc3RyaW5nO1xuXHRyZW1vdGVQYXNzd29yZCA6IHN0cmluZztcblx0ZWRpdGFibGVGaWVsZHMgOiBzdHJpbmc7XG5cdG1hbmRhdG9yeUZpZWxkcyA6IHN0cmluZztcblx0cmVhZG9ubHkgbXJzc1RyYW5zZm9ybWVyIDogc3RyaW5nO1xuXHRyZWFkb25seSBtcnNzVmFsaWRhdG9yIDogc3RyaW5nO1xuXHRyZWFkb25seSByZXN1bHRzVHJhbnNmb3JtZXIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25BY3Rpb24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzJyB9LFxuXHRcdFx0XHRyZXN1bHRzUGFyc2VyIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclBhcnNlciwgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyUGFyc2VyJyB9LFxuXHRcdFx0XHRwcm90b2NvbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wnIH0sXG5cdFx0XHRcdHNlcnZlckFkZHJlc3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVtb3RlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVVc2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW1vdGVQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlZGl0YWJsZUZpZWxkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYW5kYXRvcnlGaWVsZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bXJzc1RyYW5zZm9ybWVyIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bXJzc1ZhbGlkYXRvciA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlc3VsdHNUcmFuc2Zvcm1lciA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nXSA9IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb247Il19