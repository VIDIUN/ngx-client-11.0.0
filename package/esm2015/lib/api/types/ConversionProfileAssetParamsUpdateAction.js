/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaConversionProfileAssetParams } from './KalturaConversionProfileAssetParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ConversionProfileAssetParamsUpdateActionArgs() { }
/** @type {?} */
ConversionProfileAssetParamsUpdateActionArgs.prototype.conversionProfileId;
/** @type {?} */
ConversionProfileAssetParamsUpdateActionArgs.prototype.assetParamsId;
/** @type {?} */
ConversionProfileAssetParamsUpdateActionArgs.prototype.conversionProfileAssetParams;
/**
 * Build request payload for service 'conversionProfileAssetParams' action 'update'.
 *
 * Usage: Update asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParams
 * Server failure response type: KalturaAPIException
 */
export class ConversionProfileAssetParamsUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaConversionProfileAssetParams', responseConstructor: KalturaConversionProfileAssetParams });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'conversionprofileassetparams' },
            action: { type: 'c', default: 'update' },
            conversionProfileId: { type: 'n' },
            assetParamsId: { type: 'n' },
            conversionProfileAssetParams: { type: 'o', subTypeConstructor: KalturaConversionProfileAssetParams, subType: 'KalturaConversionProfileAssetParams' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ConversionProfileAssetParamsUpdateAction.prototype.conversionProfileId;
    /** @type {?} */
    ConversionProfileAssetParamsUpdateAction.prototype.assetParamsId;
    /** @type {?} */
    ConversionProfileAssetParamsUpdateAction.prototype.conversionProfileAssetParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1VwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1VwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFNUYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSwrQ0FBZ0QsU0FBUSxjQUFtRDs7OztJQU03RyxZQUFZLElBQW1EO1FBRTNELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRyxtQ0FBbUMsRUFBRyxDQUFDLENBQUM7S0FDM0o7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQzlFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5Qiw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUNBQW1DLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1NBQy9JLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGNvbnZlcnNpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGFzc2V0UGFyYW1zSWQgOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFzc2V0IHBhcm1hcyBvZiBjb252ZXJzaW9uIHByb2ZpbGUgYnkgSURcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1VwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zPiB7XG5cbiAgICBjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRhc3NldFBhcmFtc0lkIDogbnVtYmVyO1xuXHRjb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1VwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnZlcnNpb25wcm9maWxlYXNzZXRwYXJhbXMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19