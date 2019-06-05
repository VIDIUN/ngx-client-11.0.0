/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'conversionProfileAssetParams' action 'update'.
 *
 * Usage: Update asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParams
 * Server failure response type: KalturaAPIException
 */
ConversionProfileAssetParamsUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ConversionProfileAssetParamsUpdateAction, _super);
    function ConversionProfileAssetParamsUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaConversionProfileAssetParams', responseConstructor: KalturaConversionProfileAssetParams }) || this;
    }
    /**
     * @return {?}
     */
    ConversionProfileAssetParamsUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'conversionprofileassetparams' },
            action: { type: 'c', default: 'update' },
            conversionProfileId: { type: 'n' },
            assetParamsId: { type: 'n' },
            conversionProfileAssetParams: { type: 'o', subTypeConstructor: KalturaConversionProfileAssetParams, subType: 'KalturaConversionProfileAssetParams' }
        });
        return result;
    };
    return ConversionProfileAssetParamsUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'conversionProfileAssetParams' action 'update'.
 *
 * Usage: Update asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParams
 * Server failure response type: KalturaAPIException
 */
export { ConversionProfileAssetParamsUpdateAction };
if (false) {
    /** @type {?} */
    ConversionProfileAssetParamsUpdateAction.prototype.conversionProfileId;
    /** @type {?} */
    ConversionProfileAssetParamsUpdateAction.prototype.assetParamsId;
    /** @type {?} */
    ConversionProfileAssetParamsUpdateAction.prototype.conversionProfileAssetParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1VwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1VwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQThELG9FQUFtRDtJQU03RyxrREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRyxtQ0FBbUMsRUFBRyxDQUFDO0tBQzFKOzs7O0lBRVMsK0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDOUUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQ0FBbUMsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7U0FDL0ksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttREE3Q0w7RUFvQjhELGNBQWMsRUEwQjNFLENBQUE7Ozs7Ozs7OztBQTFCRCxvREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc1VwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRhc3NldFBhcmFtc0lkIDogbnVtYmVyO1xuXHRjb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBhc3NldCBwYXJtYXMgb2YgY29udmVyc2lvbiBwcm9maWxlIGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcz4ge1xuXG4gICAgY29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0YXNzZXRQYXJhbXNJZCA6IG51bWJlcjtcblx0Y29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcyA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb252ZXJzaW9ucHJvZmlsZWFzc2V0cGFyYW1zJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==