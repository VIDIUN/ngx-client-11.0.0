/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function GenericDistributionProviderActionAddMrssValidateActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionAddMrssValidateActionArgs.prototype.id;
/** @type {?} */
GenericDistributionProviderActionAddMrssValidateActionArgs.prototype.xsdData;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidate'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export class GenericDistributionProviderActionAddMrssValidateAction extends KalturaRequest {
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
            action: { type: 'c', default: 'addMrssValidate' },
            id: { type: 'n' },
            xsdData: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionAddMrssValidateAction.prototype.id;
    /** @type {?} */
    GenericDistributionProviderActionAddMrssValidateAction.prototype.xsdData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkTXJzc1ZhbGlkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRNcnNzVmFsaWRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRHLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sNkRBQThELFNBQVEsY0FBd0Q7Ozs7SUFLaEksWUFBWSxJQUFpRTtRQUV6RSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMENBQTBDLEVBQUUsbUJBQW1CLEVBQUcsd0NBQXdDLEVBQUcsQ0FBQyxDQUFDO0tBQ3JLOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1REFBdUQsRUFBRTtZQUN2RyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRCxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NWYWxpZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0eHNkRGF0YSA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2dlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbicgYWN0aW9uICdhZGRNcnNzVmFsaWRhdGUnLlxuICpcbiAqIFVzYWdlOiBBZGQgTVJTUyB2YWxpZGF0ZSBmaWxlIHRvIGdlbmVyaWMgZGlzdHJpYnV0aW9uIHByb3ZpZGVyIGFjdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NWYWxpZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHR4c2REYXRhIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NWYWxpZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2dlbmVyaWNkaXN0cmlidXRpb25wcm92aWRlcmFjdGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZE1yc3NWYWxpZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0eHNkRGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=