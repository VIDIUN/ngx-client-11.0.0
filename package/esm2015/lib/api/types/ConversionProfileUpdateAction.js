/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ConversionProfileUpdateActionArgs() { }
/** @type {?} */
ConversionProfileUpdateActionArgs.prototype.id;
/** @type {?} */
ConversionProfileUpdateActionArgs.prototype.conversionProfile;
/**
 * Build request payload for service 'conversionProfile' action 'update'.
 *
 * Usage: Update Conversion Profile by ID
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export class ConversionProfileUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaConversionProfile', responseConstructor: KalturaConversionProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'conversionprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            conversionProfile: { type: 'o', subTypeConstructor: KalturaConversionProfile, subType: 'KalturaConversionProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ConversionProfileUpdateAction.prototype.id;
    /** @type {?} */
    ConversionProfileUpdateAction.prototype.conversionProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2lvblByb2ZpbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NvbnZlcnNpb25Qcm9maWxlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLG9DQUFxQyxTQUFRLGNBQXdDOzs7O0lBS3ZGLFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDBCQUEwQixFQUFFLG1CQUFtQixFQUFHLHdCQUF3QixFQUFHLENBQUMsQ0FBQztLQUNySTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtTQUM5RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDb252ZXJzaW9uUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0Y29udmVyc2lvblByb2ZpbGUgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjb252ZXJzaW9uUHJvZmlsZScgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgQ29udmVyc2lvbiBQcm9maWxlIGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uUHJvZmlsZVVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZT4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENvbnZlcnNpb25Qcm9maWxlVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb252ZXJzaW9ucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==