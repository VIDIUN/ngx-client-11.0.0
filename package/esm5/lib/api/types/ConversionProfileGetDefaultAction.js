/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ConversionProfileGetDefaultActionArgs() { }
/** @type {?|undefined} */
ConversionProfileGetDefaultActionArgs.prototype.type;
/**
 * Build request payload for service 'conversionProfile' action 'getDefault'.
 *
 * Usage: Get the partner's default conversion profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'conversionProfile' action 'getDefault'.
 *
 * Usage: Get the partner's default conversion profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
ConversionProfileGetDefaultAction = /** @class */ (function (_super) {
    tslib_1.__extends(ConversionProfileGetDefaultAction, _super);
    function ConversionProfileGetDefaultAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaConversionProfile', responseConstructor: KalturaConversionProfile }) || this;
    }
    /**
     * @return {?}
     */
    ConversionProfileGetDefaultAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'conversionprofile' },
            action: { type: 'c', default: 'getDefault' },
            type: { type: 'es', subTypeConstructor: KalturaConversionProfileType, subType: 'KalturaConversionProfileType' }
        });
        return result;
    };
    return ConversionProfileGetDefaultAction;
}(KalturaRequest));
/**
 * Build request payload for service 'conversionProfile' action 'getDefault'.
 *
 * Usage: Get the partner's default conversion profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export { ConversionProfileGetDefaultAction };
if (false) {
    /** @type {?} */
    ConversionProfileGetDefaultAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2lvblByb2ZpbGVHZXREZWZhdWx0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Db252ZXJzaW9uUHJvZmlsZUdldERlZmF1bHRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBdUQsNkRBQXdDO0lBSTNGLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDBCQUEwQixFQUFFLG1CQUFtQixFQUFHLHdCQUF3QixFQUFHLENBQUM7S0FDcEk7Ozs7SUFFUyx3REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDL0MsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7U0FDMUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0F4Q0w7RUFtQnVELGNBQWMsRUFzQnBFLENBQUE7Ozs7Ozs7OztBQXRCRCw2Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnZlcnNpb25Qcm9maWxlR2V0RGVmYXVsdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB0eXBlPyA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjb252ZXJzaW9uUHJvZmlsZScgYWN0aW9uICdnZXREZWZhdWx0Jy5cbiAqXG4gKiBVc2FnZTogR2V0IHRoZSBwYXJ0bmVyJ3MgZGVmYXVsdCBjb252ZXJzaW9uIHByb2ZpbGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25Qcm9maWxlR2V0RGVmYXVsdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZT4ge1xuXG4gICAgdHlwZSA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IENvbnZlcnNpb25Qcm9maWxlR2V0RGVmYXVsdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udmVyc2lvbnByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXREZWZhdWx0JyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=