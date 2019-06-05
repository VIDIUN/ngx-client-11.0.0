/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ResponseProfileUpdateStatusActionArgs() { }
/** @type {?} */
ResponseProfileUpdateStatusActionArgs.prototype.id;
/** @type {?} */
ResponseProfileUpdateStatusActionArgs.prototype.status;
/**
 * Build request payload for service 'responseProfile' action 'updateStatus'.
 *
 * Usage: Update response profile status by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export class ResponseProfileUpdateStatusAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaResponseProfile', responseConstructor: KalturaResponseProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'responseprofile' },
            action: { type: 'c', default: 'updateStatus' },
            id: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaResponseProfileStatus, subType: 'KalturaResponseProfileStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ResponseProfileUpdateStatusAction.prototype.id;
    /** @type {?} */
    ResponseProfileUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VQcm9maWxlVXBkYXRlU3RhdHVzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXNwb25zZVByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sd0NBQXlDLFNBQVEsY0FBc0M7Ozs7SUFLekYsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQyxDQUFDO0tBQ2pJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtTQUM1RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXNwb25zZVByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFSZXNwb25zZVByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VQcm9maWxlVXBkYXRlU3RhdHVzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncmVzcG9uc2VQcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZVN0YXR1cycuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSByZXNwb25zZSBwcm9maWxlIHN0YXR1cyBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFSZXNwb25zZVByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFSZXNwb25zZVByb2ZpbGU+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFJlc3BvbnNlUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXNwb25zZXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVTdGF0dXMnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19