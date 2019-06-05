/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaGenericDistributionProfileActionArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.serverUrl;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.serverPath;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.username;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.password;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.ftpPassiveMode;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.httpFieldName;
/** @type {?|undefined} */
KalturaGenericDistributionProfileActionArgs.prototype.httpFileName;
export class KalturaGenericDistributionProfileAction extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaGenericDistributionProfileAction' },
            protocol: { type: 'en', subTypeConstructor: KalturaDistributionProtocol, subType: 'KalturaDistributionProtocol' },
            serverUrl: { type: 's' },
            serverPath: { type: 's' },
            username: { type: 's' },
            password: { type: 's' },
            ftpPassiveMode: { type: 'b' },
            httpFieldName: { type: 's' },
            httpFileName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.protocol;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.serverUrl;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.serverPath;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.username;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.password;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.ftpPassiveMode;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.httpFieldName;
    /** @type {?} */
    KalturaGenericDistributionProfileAction.prototype.httpFileName;
}
typesMappingStorage['KalturaGenericDistributionProfileAction'] = KalturaGenericDistributionProfileAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNsRixNQUFNLDhDQUErQyxTQUFRLGlCQUFpQjs7OztJQVcxRSxZQUFZLElBQW1EO1FBRTNELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNySCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwcm90b2NvbD8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2w7XG5cdHNlcnZlclVybD8gOiBzdHJpbmc7XG5cdHNlcnZlclBhdGg/IDogc3RyaW5nO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0ZnRwUGFzc2l2ZU1vZGU/IDogYm9vbGVhbjtcblx0aHR0cEZpZWxkTmFtZT8gOiBzdHJpbmc7XG5cdGh0dHBGaWxlTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHByb3RvY29sIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sO1xuXHRzZXJ2ZXJVcmwgOiBzdHJpbmc7XG5cdHNlcnZlclBhdGggOiBzdHJpbmc7XG5cdHVzZXJuYW1lIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0ZnRwUGFzc2l2ZU1vZGUgOiBib29sZWFuO1xuXHRodHRwRmllbGROYW1lIDogc3RyaW5nO1xuXHRodHRwRmlsZU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24nIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCcgfSxcblx0XHRcdFx0c2VydmVyVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlclBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwUGFzc2l2ZU1vZGUgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0aHR0cEZpZWxkTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRodHRwRmlsZU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uJ10gPSBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb247Il19