/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function GenericDistributionProviderActionAddResultsTransformFromFileActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionAddResultsTransformFromFileActionArgs.prototype.id;
/** @type {?} */
GenericDistributionProviderActionAddResultsTransformFromFileActionArgs.prototype.transformFile;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export class GenericDistributionProviderActionAddResultsTransformFromFileAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'addResultsTransformFromFile' },
            id: { type: 'n' },
            transformFile: { type: 'f' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionAddResultsTransformFromFileAction.prototype.id;
    /** @type {?} */
    GenericDistributionProviderActionAddResultsTransformFromFileAction.prototype.transformFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkUmVzdWx0c1RyYW5zZm9ybUZyb21GaWxlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRSZXN1bHRzVHJhbnNmb3JtRnJvbUZpbGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRHLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlM0YsTUFBTSx5RUFBMEUsU0FBUSxvQkFBOEQ7Ozs7SUFLbEosWUFBWSxJQUE2RTtRQUVyRixLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMENBQTBDLEVBQUUsbUJBQW1CLEVBQUcsd0NBQXdDLEVBQUcsQ0FBQyxDQUFDO0tBQ3JLOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1REFBdUQsRUFBRTtZQUN2RyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nO1xuXG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkUmVzdWx0c1RyYW5zZm9ybUZyb21GaWxlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHR0cmFuc2Zvcm1GaWxlIDogRmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2dlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbicgYWN0aW9uICdhZGRSZXN1bHRzVHJhbnNmb3JtRnJvbUZpbGUnLlxuICpcbiAqIFVzYWdlOiBBZGQgTVJTUyB0cmFuc2Zvcm0gZmlsZSB0byBnZW5lcmljIGRpc3RyaWJ1dGlvbiBwcm92aWRlciBhY3Rpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRSZXN1bHRzVHJhbnNmb3JtRnJvbUZpbGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdDxLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0dHJhbnNmb3JtRmlsZSA6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkUmVzdWx0c1RyYW5zZm9ybUZyb21GaWxlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnRlbnRkaXN0cmlidXRpb25fZ2VuZXJpY2Rpc3RyaWJ1dGlvbnByb3ZpZGVyYWN0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkUmVzdWx0c1RyYW5zZm9ybUZyb21GaWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0cmFuc2Zvcm1GaWxlIDogeyB0eXBlIDogJ2YnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==