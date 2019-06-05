/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaServerNode } from './KalturaMediaServerNode';
/**
 * @record
 */
export function KalturaWowzaMediaServerNodeArgs() { }
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.appPrefix;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.transcoder;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.GPUID;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.liveServicePort;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.liveServiceProtocol;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.liveServiceInternalDomain;
export class KalturaWowzaMediaServerNode extends KalturaMediaServerNode {
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
            objectType: { type: 'c', default: 'KalturaWowzaMediaServerNode' },
            appPrefix: { type: 's' },
            transcoder: { type: 's' },
            GPUID: { type: 'n' },
            liveServicePort: { type: 'n' },
            liveServiceProtocol: { type: 's' },
            liveServiceInternalDomain: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.appPrefix;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.transcoder;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.GPUID;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.liveServicePort;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.liveServiceProtocol;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.liveServiceInternalDomain;
}
typesMappingStorage['KalturaWowzaMediaServerNode'] = KalturaWowzaMediaServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTlGLE1BQU0sa0NBQW1DLFNBQVEsc0JBQXNCOzs7O0lBU25FLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhU2VydmVyTm9kZSwgS2FsdHVyYU1lZGlhU2VydmVyTm9kZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFNZWRpYVNlcnZlck5vZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXb3d6YU1lZGlhU2VydmVyTm9kZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU1lZGlhU2VydmVyTm9kZUFyZ3Mge1xuICAgIGFwcFByZWZpeD8gOiBzdHJpbmc7XG5cdHRyYW5zY29kZXI/IDogc3RyaW5nO1xuXHRHUFVJRD8gOiBudW1iZXI7XG5cdGxpdmVTZXJ2aWNlUG9ydD8gOiBudW1iZXI7XG5cdGxpdmVTZXJ2aWNlUHJvdG9jb2w/IDogc3RyaW5nO1xuXHRsaXZlU2VydmljZUludGVybmFsRG9tYWluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlIGV4dGVuZHMgS2FsdHVyYU1lZGlhU2VydmVyTm9kZSB7XG5cbiAgICBhcHBQcmVmaXggOiBzdHJpbmc7XG5cdHRyYW5zY29kZXIgOiBzdHJpbmc7XG5cdEdQVUlEIDogbnVtYmVyO1xuXHRsaXZlU2VydmljZVBvcnQgOiBudW1iZXI7XG5cdGxpdmVTZXJ2aWNlUHJvdG9jb2wgOiBzdHJpbmc7XG5cdGxpdmVTZXJ2aWNlSW50ZXJuYWxEb21haW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXb3d6YU1lZGlhU2VydmVyTm9kZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdGFwcFByZWZpeCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0cmFuc2NvZGVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdEdQVUlEIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxpdmVTZXJ2aWNlUG9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsaXZlU2VydmljZVByb3RvY29sIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxpdmVTZXJ2aWNlSW50ZXJuYWxEb21haW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlJ10gPSBLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGU7Il19